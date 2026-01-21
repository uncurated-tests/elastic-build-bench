'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13173<T> = T extends (infer U)[]
  ? DeepReadonlyArray13173<U>
  : T extends object
  ? DeepReadonlyObject13173<T>
  : T;

interface DeepReadonlyArray13173<T> extends ReadonlyArray<DeepReadonly13173<T>> {}

type DeepReadonlyObject13173<T> = {
  readonly [P in keyof T]: DeepReadonly13173<T[P]>;
};

type UnionToIntersection13173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13173<T> = UnionToIntersection13173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13173<T extends unknown[], V> = [...T, V];

type TuplifyUnion13173<T, L = LastOf13173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13173<TuplifyUnion13173<Exclude<T, L>>, L>;

type DeepPartial13173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13173<T[P]> }
  : T;

type Paths13173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13173<K, Paths13173<T[K], Prev13173[D]>> : never }[keyof T]
  : never;

type Prev13173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13173 {
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

type ConfigPaths13173 = Paths13173<NestedConfig13173>;

interface HeavyProps13173 {
  config: DeepPartial13173<NestedConfig13173>;
  path?: ConfigPaths13173;
}

const HeavyComponent13173 = memo(function HeavyComponent13173({ config }: HeavyProps13173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13173.displayName = 'HeavyComponent13173';
export default HeavyComponent13173;
