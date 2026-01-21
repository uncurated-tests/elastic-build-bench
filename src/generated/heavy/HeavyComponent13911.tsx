'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13911<T> = T extends (infer U)[]
  ? DeepReadonlyArray13911<U>
  : T extends object
  ? DeepReadonlyObject13911<T>
  : T;

interface DeepReadonlyArray13911<T> extends ReadonlyArray<DeepReadonly13911<T>> {}

type DeepReadonlyObject13911<T> = {
  readonly [P in keyof T]: DeepReadonly13911<T[P]>;
};

type UnionToIntersection13911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13911<T> = UnionToIntersection13911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13911<T extends unknown[], V> = [...T, V];

type TuplifyUnion13911<T, L = LastOf13911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13911<TuplifyUnion13911<Exclude<T, L>>, L>;

type DeepPartial13911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13911<T[P]> }
  : T;

type Paths13911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13911<K, Paths13911<T[K], Prev13911[D]>> : never }[keyof T]
  : never;

type Prev13911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13911 {
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

type ConfigPaths13911 = Paths13911<NestedConfig13911>;

interface HeavyProps13911 {
  config: DeepPartial13911<NestedConfig13911>;
  path?: ConfigPaths13911;
}

const HeavyComponent13911 = memo(function HeavyComponent13911({ config }: HeavyProps13911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13911.displayName = 'HeavyComponent13911';
export default HeavyComponent13911;
