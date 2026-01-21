'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13337<T> = T extends (infer U)[]
  ? DeepReadonlyArray13337<U>
  : T extends object
  ? DeepReadonlyObject13337<T>
  : T;

interface DeepReadonlyArray13337<T> extends ReadonlyArray<DeepReadonly13337<T>> {}

type DeepReadonlyObject13337<T> = {
  readonly [P in keyof T]: DeepReadonly13337<T[P]>;
};

type UnionToIntersection13337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13337<T> = UnionToIntersection13337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13337<T extends unknown[], V> = [...T, V];

type TuplifyUnion13337<T, L = LastOf13337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13337<TuplifyUnion13337<Exclude<T, L>>, L>;

type DeepPartial13337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13337<T[P]> }
  : T;

type Paths13337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13337<K, Paths13337<T[K], Prev13337[D]>> : never }[keyof T]
  : never;

type Prev13337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13337 {
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

type ConfigPaths13337 = Paths13337<NestedConfig13337>;

interface HeavyProps13337 {
  config: DeepPartial13337<NestedConfig13337>;
  path?: ConfigPaths13337;
}

const HeavyComponent13337 = memo(function HeavyComponent13337({ config }: HeavyProps13337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13337.displayName = 'HeavyComponent13337';
export default HeavyComponent13337;
