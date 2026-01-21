'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13154<T> = T extends (infer U)[]
  ? DeepReadonlyArray13154<U>
  : T extends object
  ? DeepReadonlyObject13154<T>
  : T;

interface DeepReadonlyArray13154<T> extends ReadonlyArray<DeepReadonly13154<T>> {}

type DeepReadonlyObject13154<T> = {
  readonly [P in keyof T]: DeepReadonly13154<T[P]>;
};

type UnionToIntersection13154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13154<T> = UnionToIntersection13154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13154<T extends unknown[], V> = [...T, V];

type TuplifyUnion13154<T, L = LastOf13154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13154<TuplifyUnion13154<Exclude<T, L>>, L>;

type DeepPartial13154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13154<T[P]> }
  : T;

type Paths13154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13154<K, Paths13154<T[K], Prev13154[D]>> : never }[keyof T]
  : never;

type Prev13154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13154 {
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

type ConfigPaths13154 = Paths13154<NestedConfig13154>;

interface HeavyProps13154 {
  config: DeepPartial13154<NestedConfig13154>;
  path?: ConfigPaths13154;
}

const HeavyComponent13154 = memo(function HeavyComponent13154({ config }: HeavyProps13154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13154.displayName = 'HeavyComponent13154';
export default HeavyComponent13154;
