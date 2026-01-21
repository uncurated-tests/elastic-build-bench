'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13614<T> = T extends (infer U)[]
  ? DeepReadonlyArray13614<U>
  : T extends object
  ? DeepReadonlyObject13614<T>
  : T;

interface DeepReadonlyArray13614<T> extends ReadonlyArray<DeepReadonly13614<T>> {}

type DeepReadonlyObject13614<T> = {
  readonly [P in keyof T]: DeepReadonly13614<T[P]>;
};

type UnionToIntersection13614<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13614<T> = UnionToIntersection13614<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13614<T extends unknown[], V> = [...T, V];

type TuplifyUnion13614<T, L = LastOf13614<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13614<TuplifyUnion13614<Exclude<T, L>>, L>;

type DeepPartial13614<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13614<T[P]> }
  : T;

type Paths13614<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13614<K, Paths13614<T[K], Prev13614[D]>> : never }[keyof T]
  : never;

type Prev13614 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13614<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13614 {
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

type ConfigPaths13614 = Paths13614<NestedConfig13614>;

interface HeavyProps13614 {
  config: DeepPartial13614<NestedConfig13614>;
  path?: ConfigPaths13614;
}

const HeavyComponent13614 = memo(function HeavyComponent13614({ config }: HeavyProps13614) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13614) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13614 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13614: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13614.displayName = 'HeavyComponent13614';
export default HeavyComponent13614;
