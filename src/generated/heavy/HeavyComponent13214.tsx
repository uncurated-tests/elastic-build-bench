'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13214<T> = T extends (infer U)[]
  ? DeepReadonlyArray13214<U>
  : T extends object
  ? DeepReadonlyObject13214<T>
  : T;

interface DeepReadonlyArray13214<T> extends ReadonlyArray<DeepReadonly13214<T>> {}

type DeepReadonlyObject13214<T> = {
  readonly [P in keyof T]: DeepReadonly13214<T[P]>;
};

type UnionToIntersection13214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13214<T> = UnionToIntersection13214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13214<T extends unknown[], V> = [...T, V];

type TuplifyUnion13214<T, L = LastOf13214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13214<TuplifyUnion13214<Exclude<T, L>>, L>;

type DeepPartial13214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13214<T[P]> }
  : T;

type Paths13214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13214<K, Paths13214<T[K], Prev13214[D]>> : never }[keyof T]
  : never;

type Prev13214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13214 {
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

type ConfigPaths13214 = Paths13214<NestedConfig13214>;

interface HeavyProps13214 {
  config: DeepPartial13214<NestedConfig13214>;
  path?: ConfigPaths13214;
}

const HeavyComponent13214 = memo(function HeavyComponent13214({ config }: HeavyProps13214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13214.displayName = 'HeavyComponent13214';
export default HeavyComponent13214;
