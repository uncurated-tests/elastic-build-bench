'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9306<T> = T extends (infer U)[]
  ? DeepReadonlyArray9306<U>
  : T extends object
  ? DeepReadonlyObject9306<T>
  : T;

interface DeepReadonlyArray9306<T> extends ReadonlyArray<DeepReadonly9306<T>> {}

type DeepReadonlyObject9306<T> = {
  readonly [P in keyof T]: DeepReadonly9306<T[P]>;
};

type UnionToIntersection9306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9306<T> = UnionToIntersection9306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9306<T extends unknown[], V> = [...T, V];

type TuplifyUnion9306<T, L = LastOf9306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9306<TuplifyUnion9306<Exclude<T, L>>, L>;

type DeepPartial9306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9306<T[P]> }
  : T;

type Paths9306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9306<K, Paths9306<T[K], Prev9306[D]>> : never }[keyof T]
  : never;

type Prev9306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9306 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths9306 = Paths9306<NestedConfig9306>;

interface HeavyProps9306 {
  config: DeepPartial9306<NestedConfig9306>;
  path?: ConfigPaths9306;
}

const HeavyComponent9306 = memo(function HeavyComponent9306({ config }: HeavyProps9306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9306.displayName = 'HeavyComponent9306';
export default HeavyComponent9306;
