'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13964<T> = T extends (infer U)[]
  ? DeepReadonlyArray13964<U>
  : T extends object
  ? DeepReadonlyObject13964<T>
  : T;

interface DeepReadonlyArray13964<T> extends ReadonlyArray<DeepReadonly13964<T>> {}

type DeepReadonlyObject13964<T> = {
  readonly [P in keyof T]: DeepReadonly13964<T[P]>;
};

type UnionToIntersection13964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13964<T> = UnionToIntersection13964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13964<T extends unknown[], V> = [...T, V];

type TuplifyUnion13964<T, L = LastOf13964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13964<TuplifyUnion13964<Exclude<T, L>>, L>;

type DeepPartial13964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13964<T[P]> }
  : T;

type Paths13964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13964<K, Paths13964<T[K], Prev13964[D]>> : never }[keyof T]
  : never;

type Prev13964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13964 {
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

type ConfigPaths13964 = Paths13964<NestedConfig13964>;

interface HeavyProps13964 {
  config: DeepPartial13964<NestedConfig13964>;
  path?: ConfigPaths13964;
}

const HeavyComponent13964 = memo(function HeavyComponent13964({ config }: HeavyProps13964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13964.displayName = 'HeavyComponent13964';
export default HeavyComponent13964;
