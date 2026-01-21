'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13609<T> = T extends (infer U)[]
  ? DeepReadonlyArray13609<U>
  : T extends object
  ? DeepReadonlyObject13609<T>
  : T;

interface DeepReadonlyArray13609<T> extends ReadonlyArray<DeepReadonly13609<T>> {}

type DeepReadonlyObject13609<T> = {
  readonly [P in keyof T]: DeepReadonly13609<T[P]>;
};

type UnionToIntersection13609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13609<T> = UnionToIntersection13609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13609<T extends unknown[], V> = [...T, V];

type TuplifyUnion13609<T, L = LastOf13609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13609<TuplifyUnion13609<Exclude<T, L>>, L>;

type DeepPartial13609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13609<T[P]> }
  : T;

type Paths13609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13609<K, Paths13609<T[K], Prev13609[D]>> : never }[keyof T]
  : never;

type Prev13609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13609 {
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

type ConfigPaths13609 = Paths13609<NestedConfig13609>;

interface HeavyProps13609 {
  config: DeepPartial13609<NestedConfig13609>;
  path?: ConfigPaths13609;
}

const HeavyComponent13609 = memo(function HeavyComponent13609({ config }: HeavyProps13609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13609.displayName = 'HeavyComponent13609';
export default HeavyComponent13609;
