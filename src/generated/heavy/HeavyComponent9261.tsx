'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9261<T> = T extends (infer U)[]
  ? DeepReadonlyArray9261<U>
  : T extends object
  ? DeepReadonlyObject9261<T>
  : T;

interface DeepReadonlyArray9261<T> extends ReadonlyArray<DeepReadonly9261<T>> {}

type DeepReadonlyObject9261<T> = {
  readonly [P in keyof T]: DeepReadonly9261<T[P]>;
};

type UnionToIntersection9261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9261<T> = UnionToIntersection9261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9261<T extends unknown[], V> = [...T, V];

type TuplifyUnion9261<T, L = LastOf9261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9261<TuplifyUnion9261<Exclude<T, L>>, L>;

type DeepPartial9261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9261<T[P]> }
  : T;

type Paths9261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9261<K, Paths9261<T[K], Prev9261[D]>> : never }[keyof T]
  : never;

type Prev9261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9261 {
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

type ConfigPaths9261 = Paths9261<NestedConfig9261>;

interface HeavyProps9261 {
  config: DeepPartial9261<NestedConfig9261>;
  path?: ConfigPaths9261;
}

const HeavyComponent9261 = memo(function HeavyComponent9261({ config }: HeavyProps9261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9261.displayName = 'HeavyComponent9261';
export default HeavyComponent9261;
