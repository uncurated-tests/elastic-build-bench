'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13927<T> = T extends (infer U)[]
  ? DeepReadonlyArray13927<U>
  : T extends object
  ? DeepReadonlyObject13927<T>
  : T;

interface DeepReadonlyArray13927<T> extends ReadonlyArray<DeepReadonly13927<T>> {}

type DeepReadonlyObject13927<T> = {
  readonly [P in keyof T]: DeepReadonly13927<T[P]>;
};

type UnionToIntersection13927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13927<T> = UnionToIntersection13927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13927<T extends unknown[], V> = [...T, V];

type TuplifyUnion13927<T, L = LastOf13927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13927<TuplifyUnion13927<Exclude<T, L>>, L>;

type DeepPartial13927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13927<T[P]> }
  : T;

type Paths13927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13927<K, Paths13927<T[K], Prev13927[D]>> : never }[keyof T]
  : never;

type Prev13927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13927 {
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

type ConfigPaths13927 = Paths13927<NestedConfig13927>;

interface HeavyProps13927 {
  config: DeepPartial13927<NestedConfig13927>;
  path?: ConfigPaths13927;
}

const HeavyComponent13927 = memo(function HeavyComponent13927({ config }: HeavyProps13927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13927.displayName = 'HeavyComponent13927';
export default HeavyComponent13927;
