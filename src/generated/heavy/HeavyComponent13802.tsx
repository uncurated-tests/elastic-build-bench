'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13802<T> = T extends (infer U)[]
  ? DeepReadonlyArray13802<U>
  : T extends object
  ? DeepReadonlyObject13802<T>
  : T;

interface DeepReadonlyArray13802<T> extends ReadonlyArray<DeepReadonly13802<T>> {}

type DeepReadonlyObject13802<T> = {
  readonly [P in keyof T]: DeepReadonly13802<T[P]>;
};

type UnionToIntersection13802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13802<T> = UnionToIntersection13802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13802<T extends unknown[], V> = [...T, V];

type TuplifyUnion13802<T, L = LastOf13802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13802<TuplifyUnion13802<Exclude<T, L>>, L>;

type DeepPartial13802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13802<T[P]> }
  : T;

type Paths13802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13802<K, Paths13802<T[K], Prev13802[D]>> : never }[keyof T]
  : never;

type Prev13802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13802 {
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

type ConfigPaths13802 = Paths13802<NestedConfig13802>;

interface HeavyProps13802 {
  config: DeepPartial13802<NestedConfig13802>;
  path?: ConfigPaths13802;
}

const HeavyComponent13802 = memo(function HeavyComponent13802({ config }: HeavyProps13802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13802.displayName = 'HeavyComponent13802';
export default HeavyComponent13802;
