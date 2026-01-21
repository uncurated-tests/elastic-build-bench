'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13182<T> = T extends (infer U)[]
  ? DeepReadonlyArray13182<U>
  : T extends object
  ? DeepReadonlyObject13182<T>
  : T;

interface DeepReadonlyArray13182<T> extends ReadonlyArray<DeepReadonly13182<T>> {}

type DeepReadonlyObject13182<T> = {
  readonly [P in keyof T]: DeepReadonly13182<T[P]>;
};

type UnionToIntersection13182<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13182<T> = UnionToIntersection13182<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13182<T extends unknown[], V> = [...T, V];

type TuplifyUnion13182<T, L = LastOf13182<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13182<TuplifyUnion13182<Exclude<T, L>>, L>;

type DeepPartial13182<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13182<T[P]> }
  : T;

type Paths13182<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13182<K, Paths13182<T[K], Prev13182[D]>> : never }[keyof T]
  : never;

type Prev13182 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13182<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13182 {
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

type ConfigPaths13182 = Paths13182<NestedConfig13182>;

interface HeavyProps13182 {
  config: DeepPartial13182<NestedConfig13182>;
  path?: ConfigPaths13182;
}

const HeavyComponent13182 = memo(function HeavyComponent13182({ config }: HeavyProps13182) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13182) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13182 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13182: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13182.displayName = 'HeavyComponent13182';
export default HeavyComponent13182;
