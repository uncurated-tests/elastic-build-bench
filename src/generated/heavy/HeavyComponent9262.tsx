'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9262<T> = T extends (infer U)[]
  ? DeepReadonlyArray9262<U>
  : T extends object
  ? DeepReadonlyObject9262<T>
  : T;

interface DeepReadonlyArray9262<T> extends ReadonlyArray<DeepReadonly9262<T>> {}

type DeepReadonlyObject9262<T> = {
  readonly [P in keyof T]: DeepReadonly9262<T[P]>;
};

type UnionToIntersection9262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9262<T> = UnionToIntersection9262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9262<T extends unknown[], V> = [...T, V];

type TuplifyUnion9262<T, L = LastOf9262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9262<TuplifyUnion9262<Exclude<T, L>>, L>;

type DeepPartial9262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9262<T[P]> }
  : T;

type Paths9262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9262<K, Paths9262<T[K], Prev9262[D]>> : never }[keyof T]
  : never;

type Prev9262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9262 {
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

type ConfigPaths9262 = Paths9262<NestedConfig9262>;

interface HeavyProps9262 {
  config: DeepPartial9262<NestedConfig9262>;
  path?: ConfigPaths9262;
}

const HeavyComponent9262 = memo(function HeavyComponent9262({ config }: HeavyProps9262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9262.displayName = 'HeavyComponent9262';
export default HeavyComponent9262;
