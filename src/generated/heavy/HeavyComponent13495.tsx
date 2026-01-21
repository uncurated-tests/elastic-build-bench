'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13495<T> = T extends (infer U)[]
  ? DeepReadonlyArray13495<U>
  : T extends object
  ? DeepReadonlyObject13495<T>
  : T;

interface DeepReadonlyArray13495<T> extends ReadonlyArray<DeepReadonly13495<T>> {}

type DeepReadonlyObject13495<T> = {
  readonly [P in keyof T]: DeepReadonly13495<T[P]>;
};

type UnionToIntersection13495<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13495<T> = UnionToIntersection13495<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13495<T extends unknown[], V> = [...T, V];

type TuplifyUnion13495<T, L = LastOf13495<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13495<TuplifyUnion13495<Exclude<T, L>>, L>;

type DeepPartial13495<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13495<T[P]> }
  : T;

type Paths13495<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13495<K, Paths13495<T[K], Prev13495[D]>> : never }[keyof T]
  : never;

type Prev13495 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13495<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13495 {
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

type ConfigPaths13495 = Paths13495<NestedConfig13495>;

interface HeavyProps13495 {
  config: DeepPartial13495<NestedConfig13495>;
  path?: ConfigPaths13495;
}

const HeavyComponent13495 = memo(function HeavyComponent13495({ config }: HeavyProps13495) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13495) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13495 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13495: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13495.displayName = 'HeavyComponent13495';
export default HeavyComponent13495;
