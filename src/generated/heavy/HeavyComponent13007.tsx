'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13007<T> = T extends (infer U)[]
  ? DeepReadonlyArray13007<U>
  : T extends object
  ? DeepReadonlyObject13007<T>
  : T;

interface DeepReadonlyArray13007<T> extends ReadonlyArray<DeepReadonly13007<T>> {}

type DeepReadonlyObject13007<T> = {
  readonly [P in keyof T]: DeepReadonly13007<T[P]>;
};

type UnionToIntersection13007<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13007<T> = UnionToIntersection13007<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13007<T extends unknown[], V> = [...T, V];

type TuplifyUnion13007<T, L = LastOf13007<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13007<TuplifyUnion13007<Exclude<T, L>>, L>;

type DeepPartial13007<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13007<T[P]> }
  : T;

type Paths13007<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13007<K, Paths13007<T[K], Prev13007[D]>> : never }[keyof T]
  : never;

type Prev13007 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13007<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13007 {
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

type ConfigPaths13007 = Paths13007<NestedConfig13007>;

interface HeavyProps13007 {
  config: DeepPartial13007<NestedConfig13007>;
  path?: ConfigPaths13007;
}

const HeavyComponent13007 = memo(function HeavyComponent13007({ config }: HeavyProps13007) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13007) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13007 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13007: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13007.displayName = 'HeavyComponent13007';
export default HeavyComponent13007;
