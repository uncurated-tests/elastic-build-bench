'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13830<T> = T extends (infer U)[]
  ? DeepReadonlyArray13830<U>
  : T extends object
  ? DeepReadonlyObject13830<T>
  : T;

interface DeepReadonlyArray13830<T> extends ReadonlyArray<DeepReadonly13830<T>> {}

type DeepReadonlyObject13830<T> = {
  readonly [P in keyof T]: DeepReadonly13830<T[P]>;
};

type UnionToIntersection13830<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13830<T> = UnionToIntersection13830<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13830<T extends unknown[], V> = [...T, V];

type TuplifyUnion13830<T, L = LastOf13830<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13830<TuplifyUnion13830<Exclude<T, L>>, L>;

type DeepPartial13830<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13830<T[P]> }
  : T;

type Paths13830<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13830<K, Paths13830<T[K], Prev13830[D]>> : never }[keyof T]
  : never;

type Prev13830 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13830<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13830 {
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

type ConfigPaths13830 = Paths13830<NestedConfig13830>;

interface HeavyProps13830 {
  config: DeepPartial13830<NestedConfig13830>;
  path?: ConfigPaths13830;
}

const HeavyComponent13830 = memo(function HeavyComponent13830({ config }: HeavyProps13830) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13830) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13830 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13830: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13830.displayName = 'HeavyComponent13830';
export default HeavyComponent13830;
