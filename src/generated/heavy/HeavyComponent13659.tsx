'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13659<T> = T extends (infer U)[]
  ? DeepReadonlyArray13659<U>
  : T extends object
  ? DeepReadonlyObject13659<T>
  : T;

interface DeepReadonlyArray13659<T> extends ReadonlyArray<DeepReadonly13659<T>> {}

type DeepReadonlyObject13659<T> = {
  readonly [P in keyof T]: DeepReadonly13659<T[P]>;
};

type UnionToIntersection13659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13659<T> = UnionToIntersection13659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13659<T extends unknown[], V> = [...T, V];

type TuplifyUnion13659<T, L = LastOf13659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13659<TuplifyUnion13659<Exclude<T, L>>, L>;

type DeepPartial13659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13659<T[P]> }
  : T;

type Paths13659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13659<K, Paths13659<T[K], Prev13659[D]>> : never }[keyof T]
  : never;

type Prev13659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13659 {
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

type ConfigPaths13659 = Paths13659<NestedConfig13659>;

interface HeavyProps13659 {
  config: DeepPartial13659<NestedConfig13659>;
  path?: ConfigPaths13659;
}

const HeavyComponent13659 = memo(function HeavyComponent13659({ config }: HeavyProps13659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13659.displayName = 'HeavyComponent13659';
export default HeavyComponent13659;
