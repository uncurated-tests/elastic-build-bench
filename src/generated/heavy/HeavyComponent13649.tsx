'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13649<T> = T extends (infer U)[]
  ? DeepReadonlyArray13649<U>
  : T extends object
  ? DeepReadonlyObject13649<T>
  : T;

interface DeepReadonlyArray13649<T> extends ReadonlyArray<DeepReadonly13649<T>> {}

type DeepReadonlyObject13649<T> = {
  readonly [P in keyof T]: DeepReadonly13649<T[P]>;
};

type UnionToIntersection13649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13649<T> = UnionToIntersection13649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13649<T extends unknown[], V> = [...T, V];

type TuplifyUnion13649<T, L = LastOf13649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13649<TuplifyUnion13649<Exclude<T, L>>, L>;

type DeepPartial13649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13649<T[P]> }
  : T;

type Paths13649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13649<K, Paths13649<T[K], Prev13649[D]>> : never }[keyof T]
  : never;

type Prev13649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13649 {
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

type ConfigPaths13649 = Paths13649<NestedConfig13649>;

interface HeavyProps13649 {
  config: DeepPartial13649<NestedConfig13649>;
  path?: ConfigPaths13649;
}

const HeavyComponent13649 = memo(function HeavyComponent13649({ config }: HeavyProps13649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13649.displayName = 'HeavyComponent13649';
export default HeavyComponent13649;
