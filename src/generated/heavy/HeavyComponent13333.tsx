'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13333<T> = T extends (infer U)[]
  ? DeepReadonlyArray13333<U>
  : T extends object
  ? DeepReadonlyObject13333<T>
  : T;

interface DeepReadonlyArray13333<T> extends ReadonlyArray<DeepReadonly13333<T>> {}

type DeepReadonlyObject13333<T> = {
  readonly [P in keyof T]: DeepReadonly13333<T[P]>;
};

type UnionToIntersection13333<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13333<T> = UnionToIntersection13333<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13333<T extends unknown[], V> = [...T, V];

type TuplifyUnion13333<T, L = LastOf13333<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13333<TuplifyUnion13333<Exclude<T, L>>, L>;

type DeepPartial13333<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13333<T[P]> }
  : T;

type Paths13333<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13333<K, Paths13333<T[K], Prev13333[D]>> : never }[keyof T]
  : never;

type Prev13333 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13333<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13333 {
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

type ConfigPaths13333 = Paths13333<NestedConfig13333>;

interface HeavyProps13333 {
  config: DeepPartial13333<NestedConfig13333>;
  path?: ConfigPaths13333;
}

const HeavyComponent13333 = memo(function HeavyComponent13333({ config }: HeavyProps13333) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13333) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13333 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13333: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13333.displayName = 'HeavyComponent13333';
export default HeavyComponent13333;
