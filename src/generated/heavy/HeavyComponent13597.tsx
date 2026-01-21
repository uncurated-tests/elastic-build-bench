'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13597<T> = T extends (infer U)[]
  ? DeepReadonlyArray13597<U>
  : T extends object
  ? DeepReadonlyObject13597<T>
  : T;

interface DeepReadonlyArray13597<T> extends ReadonlyArray<DeepReadonly13597<T>> {}

type DeepReadonlyObject13597<T> = {
  readonly [P in keyof T]: DeepReadonly13597<T[P]>;
};

type UnionToIntersection13597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13597<T> = UnionToIntersection13597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13597<T extends unknown[], V> = [...T, V];

type TuplifyUnion13597<T, L = LastOf13597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13597<TuplifyUnion13597<Exclude<T, L>>, L>;

type DeepPartial13597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13597<T[P]> }
  : T;

type Paths13597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13597<K, Paths13597<T[K], Prev13597[D]>> : never }[keyof T]
  : never;

type Prev13597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13597 {
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

type ConfigPaths13597 = Paths13597<NestedConfig13597>;

interface HeavyProps13597 {
  config: DeepPartial13597<NestedConfig13597>;
  path?: ConfigPaths13597;
}

const HeavyComponent13597 = memo(function HeavyComponent13597({ config }: HeavyProps13597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13597.displayName = 'HeavyComponent13597';
export default HeavyComponent13597;
