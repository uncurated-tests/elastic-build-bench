'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13135<T> = T extends (infer U)[]
  ? DeepReadonlyArray13135<U>
  : T extends object
  ? DeepReadonlyObject13135<T>
  : T;

interface DeepReadonlyArray13135<T> extends ReadonlyArray<DeepReadonly13135<T>> {}

type DeepReadonlyObject13135<T> = {
  readonly [P in keyof T]: DeepReadonly13135<T[P]>;
};

type UnionToIntersection13135<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13135<T> = UnionToIntersection13135<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13135<T extends unknown[], V> = [...T, V];

type TuplifyUnion13135<T, L = LastOf13135<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13135<TuplifyUnion13135<Exclude<T, L>>, L>;

type DeepPartial13135<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13135<T[P]> }
  : T;

type Paths13135<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13135<K, Paths13135<T[K], Prev13135[D]>> : never }[keyof T]
  : never;

type Prev13135 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13135<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13135 {
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

type ConfigPaths13135 = Paths13135<NestedConfig13135>;

interface HeavyProps13135 {
  config: DeepPartial13135<NestedConfig13135>;
  path?: ConfigPaths13135;
}

const HeavyComponent13135 = memo(function HeavyComponent13135({ config }: HeavyProps13135) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13135) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13135 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13135: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13135.displayName = 'HeavyComponent13135';
export default HeavyComponent13135;
