'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13227<T> = T extends (infer U)[]
  ? DeepReadonlyArray13227<U>
  : T extends object
  ? DeepReadonlyObject13227<T>
  : T;

interface DeepReadonlyArray13227<T> extends ReadonlyArray<DeepReadonly13227<T>> {}

type DeepReadonlyObject13227<T> = {
  readonly [P in keyof T]: DeepReadonly13227<T[P]>;
};

type UnionToIntersection13227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13227<T> = UnionToIntersection13227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13227<T extends unknown[], V> = [...T, V];

type TuplifyUnion13227<T, L = LastOf13227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13227<TuplifyUnion13227<Exclude<T, L>>, L>;

type DeepPartial13227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13227<T[P]> }
  : T;

type Paths13227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13227<K, Paths13227<T[K], Prev13227[D]>> : never }[keyof T]
  : never;

type Prev13227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13227 {
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

type ConfigPaths13227 = Paths13227<NestedConfig13227>;

interface HeavyProps13227 {
  config: DeepPartial13227<NestedConfig13227>;
  path?: ConfigPaths13227;
}

const HeavyComponent13227 = memo(function HeavyComponent13227({ config }: HeavyProps13227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13227.displayName = 'HeavyComponent13227';
export default HeavyComponent13227;
