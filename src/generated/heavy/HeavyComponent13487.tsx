'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13487<T> = T extends (infer U)[]
  ? DeepReadonlyArray13487<U>
  : T extends object
  ? DeepReadonlyObject13487<T>
  : T;

interface DeepReadonlyArray13487<T> extends ReadonlyArray<DeepReadonly13487<T>> {}

type DeepReadonlyObject13487<T> = {
  readonly [P in keyof T]: DeepReadonly13487<T[P]>;
};

type UnionToIntersection13487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13487<T> = UnionToIntersection13487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13487<T extends unknown[], V> = [...T, V];

type TuplifyUnion13487<T, L = LastOf13487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13487<TuplifyUnion13487<Exclude<T, L>>, L>;

type DeepPartial13487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13487<T[P]> }
  : T;

type Paths13487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13487<K, Paths13487<T[K], Prev13487[D]>> : never }[keyof T]
  : never;

type Prev13487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13487 {
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

type ConfigPaths13487 = Paths13487<NestedConfig13487>;

interface HeavyProps13487 {
  config: DeepPartial13487<NestedConfig13487>;
  path?: ConfigPaths13487;
}

const HeavyComponent13487 = memo(function HeavyComponent13487({ config }: HeavyProps13487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13487.displayName = 'HeavyComponent13487';
export default HeavyComponent13487;
