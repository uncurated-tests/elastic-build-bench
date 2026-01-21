'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13269<T> = T extends (infer U)[]
  ? DeepReadonlyArray13269<U>
  : T extends object
  ? DeepReadonlyObject13269<T>
  : T;

interface DeepReadonlyArray13269<T> extends ReadonlyArray<DeepReadonly13269<T>> {}

type DeepReadonlyObject13269<T> = {
  readonly [P in keyof T]: DeepReadonly13269<T[P]>;
};

type UnionToIntersection13269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13269<T> = UnionToIntersection13269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13269<T extends unknown[], V> = [...T, V];

type TuplifyUnion13269<T, L = LastOf13269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13269<TuplifyUnion13269<Exclude<T, L>>, L>;

type DeepPartial13269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13269<T[P]> }
  : T;

type Paths13269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13269<K, Paths13269<T[K], Prev13269[D]>> : never }[keyof T]
  : never;

type Prev13269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13269 {
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

type ConfigPaths13269 = Paths13269<NestedConfig13269>;

interface HeavyProps13269 {
  config: DeepPartial13269<NestedConfig13269>;
  path?: ConfigPaths13269;
}

const HeavyComponent13269 = memo(function HeavyComponent13269({ config }: HeavyProps13269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13269.displayName = 'HeavyComponent13269';
export default HeavyComponent13269;
