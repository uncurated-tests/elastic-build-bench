'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13943<T> = T extends (infer U)[]
  ? DeepReadonlyArray13943<U>
  : T extends object
  ? DeepReadonlyObject13943<T>
  : T;

interface DeepReadonlyArray13943<T> extends ReadonlyArray<DeepReadonly13943<T>> {}

type DeepReadonlyObject13943<T> = {
  readonly [P in keyof T]: DeepReadonly13943<T[P]>;
};

type UnionToIntersection13943<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13943<T> = UnionToIntersection13943<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13943<T extends unknown[], V> = [...T, V];

type TuplifyUnion13943<T, L = LastOf13943<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13943<TuplifyUnion13943<Exclude<T, L>>, L>;

type DeepPartial13943<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13943<T[P]> }
  : T;

type Paths13943<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13943<K, Paths13943<T[K], Prev13943[D]>> : never }[keyof T]
  : never;

type Prev13943 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13943<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13943 {
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

type ConfigPaths13943 = Paths13943<NestedConfig13943>;

interface HeavyProps13943 {
  config: DeepPartial13943<NestedConfig13943>;
  path?: ConfigPaths13943;
}

const HeavyComponent13943 = memo(function HeavyComponent13943({ config }: HeavyProps13943) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13943) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13943 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13943: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13943.displayName = 'HeavyComponent13943';
export default HeavyComponent13943;
