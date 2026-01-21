'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13044<T> = T extends (infer U)[]
  ? DeepReadonlyArray13044<U>
  : T extends object
  ? DeepReadonlyObject13044<T>
  : T;

interface DeepReadonlyArray13044<T> extends ReadonlyArray<DeepReadonly13044<T>> {}

type DeepReadonlyObject13044<T> = {
  readonly [P in keyof T]: DeepReadonly13044<T[P]>;
};

type UnionToIntersection13044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13044<T> = UnionToIntersection13044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13044<T extends unknown[], V> = [...T, V];

type TuplifyUnion13044<T, L = LastOf13044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13044<TuplifyUnion13044<Exclude<T, L>>, L>;

type DeepPartial13044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13044<T[P]> }
  : T;

type Paths13044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13044<K, Paths13044<T[K], Prev13044[D]>> : never }[keyof T]
  : never;

type Prev13044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13044 {
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

type ConfigPaths13044 = Paths13044<NestedConfig13044>;

interface HeavyProps13044 {
  config: DeepPartial13044<NestedConfig13044>;
  path?: ConfigPaths13044;
}

const HeavyComponent13044 = memo(function HeavyComponent13044({ config }: HeavyProps13044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13044.displayName = 'HeavyComponent13044';
export default HeavyComponent13044;
