'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13230<T> = T extends (infer U)[]
  ? DeepReadonlyArray13230<U>
  : T extends object
  ? DeepReadonlyObject13230<T>
  : T;

interface DeepReadonlyArray13230<T> extends ReadonlyArray<DeepReadonly13230<T>> {}

type DeepReadonlyObject13230<T> = {
  readonly [P in keyof T]: DeepReadonly13230<T[P]>;
};

type UnionToIntersection13230<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13230<T> = UnionToIntersection13230<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13230<T extends unknown[], V> = [...T, V];

type TuplifyUnion13230<T, L = LastOf13230<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13230<TuplifyUnion13230<Exclude<T, L>>, L>;

type DeepPartial13230<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13230<T[P]> }
  : T;

type Paths13230<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13230<K, Paths13230<T[K], Prev13230[D]>> : never }[keyof T]
  : never;

type Prev13230 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13230<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13230 {
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

type ConfigPaths13230 = Paths13230<NestedConfig13230>;

interface HeavyProps13230 {
  config: DeepPartial13230<NestedConfig13230>;
  path?: ConfigPaths13230;
}

const HeavyComponent13230 = memo(function HeavyComponent13230({ config }: HeavyProps13230) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13230) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13230 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13230: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13230.displayName = 'HeavyComponent13230';
export default HeavyComponent13230;
