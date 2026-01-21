'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13395<T> = T extends (infer U)[]
  ? DeepReadonlyArray13395<U>
  : T extends object
  ? DeepReadonlyObject13395<T>
  : T;

interface DeepReadonlyArray13395<T> extends ReadonlyArray<DeepReadonly13395<T>> {}

type DeepReadonlyObject13395<T> = {
  readonly [P in keyof T]: DeepReadonly13395<T[P]>;
};

type UnionToIntersection13395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13395<T> = UnionToIntersection13395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13395<T extends unknown[], V> = [...T, V];

type TuplifyUnion13395<T, L = LastOf13395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13395<TuplifyUnion13395<Exclude<T, L>>, L>;

type DeepPartial13395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13395<T[P]> }
  : T;

type Paths13395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13395<K, Paths13395<T[K], Prev13395[D]>> : never }[keyof T]
  : never;

type Prev13395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13395 {
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

type ConfigPaths13395 = Paths13395<NestedConfig13395>;

interface HeavyProps13395 {
  config: DeepPartial13395<NestedConfig13395>;
  path?: ConfigPaths13395;
}

const HeavyComponent13395 = memo(function HeavyComponent13395({ config }: HeavyProps13395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13395.displayName = 'HeavyComponent13395';
export default HeavyComponent13395;
