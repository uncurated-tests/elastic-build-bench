'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13800<T> = T extends (infer U)[]
  ? DeepReadonlyArray13800<U>
  : T extends object
  ? DeepReadonlyObject13800<T>
  : T;

interface DeepReadonlyArray13800<T> extends ReadonlyArray<DeepReadonly13800<T>> {}

type DeepReadonlyObject13800<T> = {
  readonly [P in keyof T]: DeepReadonly13800<T[P]>;
};

type UnionToIntersection13800<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13800<T> = UnionToIntersection13800<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13800<T extends unknown[], V> = [...T, V];

type TuplifyUnion13800<T, L = LastOf13800<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13800<TuplifyUnion13800<Exclude<T, L>>, L>;

type DeepPartial13800<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13800<T[P]> }
  : T;

type Paths13800<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13800<K, Paths13800<T[K], Prev13800[D]>> : never }[keyof T]
  : never;

type Prev13800 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13800<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13800 {
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

type ConfigPaths13800 = Paths13800<NestedConfig13800>;

interface HeavyProps13800 {
  config: DeepPartial13800<NestedConfig13800>;
  path?: ConfigPaths13800;
}

const HeavyComponent13800 = memo(function HeavyComponent13800({ config }: HeavyProps13800) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13800) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13800 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13800: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13800.displayName = 'HeavyComponent13800';
export default HeavyComponent13800;
