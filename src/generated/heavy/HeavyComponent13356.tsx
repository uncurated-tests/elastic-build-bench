'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13356<T> = T extends (infer U)[]
  ? DeepReadonlyArray13356<U>
  : T extends object
  ? DeepReadonlyObject13356<T>
  : T;

interface DeepReadonlyArray13356<T> extends ReadonlyArray<DeepReadonly13356<T>> {}

type DeepReadonlyObject13356<T> = {
  readonly [P in keyof T]: DeepReadonly13356<T[P]>;
};

type UnionToIntersection13356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13356<T> = UnionToIntersection13356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13356<T extends unknown[], V> = [...T, V];

type TuplifyUnion13356<T, L = LastOf13356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13356<TuplifyUnion13356<Exclude<T, L>>, L>;

type DeepPartial13356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13356<T[P]> }
  : T;

type Paths13356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13356<K, Paths13356<T[K], Prev13356[D]>> : never }[keyof T]
  : never;

type Prev13356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13356 {
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

type ConfigPaths13356 = Paths13356<NestedConfig13356>;

interface HeavyProps13356 {
  config: DeepPartial13356<NestedConfig13356>;
  path?: ConfigPaths13356;
}

const HeavyComponent13356 = memo(function HeavyComponent13356({ config }: HeavyProps13356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13356.displayName = 'HeavyComponent13356';
export default HeavyComponent13356;
