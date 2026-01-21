'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4961<T> = T extends (infer U)[]
  ? DeepReadonlyArray4961<U>
  : T extends object
  ? DeepReadonlyObject4961<T>
  : T;

interface DeepReadonlyArray4961<T> extends ReadonlyArray<DeepReadonly4961<T>> {}

type DeepReadonlyObject4961<T> = {
  readonly [P in keyof T]: DeepReadonly4961<T[P]>;
};

type UnionToIntersection4961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4961<T> = UnionToIntersection4961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4961<T extends unknown[], V> = [...T, V];

type TuplifyUnion4961<T, L = LastOf4961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4961<TuplifyUnion4961<Exclude<T, L>>, L>;

type DeepPartial4961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4961<T[P]> }
  : T;

type Paths4961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4961<K, Paths4961<T[K], Prev4961[D]>> : never }[keyof T]
  : never;

type Prev4961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4961 {
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

type ConfigPaths4961 = Paths4961<NestedConfig4961>;

interface HeavyProps4961 {
  config: DeepPartial4961<NestedConfig4961>;
  path?: ConfigPaths4961;
}

const HeavyComponent4961 = memo(function HeavyComponent4961({ config }: HeavyProps4961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4961.displayName = 'HeavyComponent4961';
export default HeavyComponent4961;
