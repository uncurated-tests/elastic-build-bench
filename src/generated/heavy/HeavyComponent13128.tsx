'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13128<T> = T extends (infer U)[]
  ? DeepReadonlyArray13128<U>
  : T extends object
  ? DeepReadonlyObject13128<T>
  : T;

interface DeepReadonlyArray13128<T> extends ReadonlyArray<DeepReadonly13128<T>> {}

type DeepReadonlyObject13128<T> = {
  readonly [P in keyof T]: DeepReadonly13128<T[P]>;
};

type UnionToIntersection13128<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13128<T> = UnionToIntersection13128<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13128<T extends unknown[], V> = [...T, V];

type TuplifyUnion13128<T, L = LastOf13128<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13128<TuplifyUnion13128<Exclude<T, L>>, L>;

type DeepPartial13128<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13128<T[P]> }
  : T;

type Paths13128<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13128<K, Paths13128<T[K], Prev13128[D]>> : never }[keyof T]
  : never;

type Prev13128 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13128<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13128 {
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

type ConfigPaths13128 = Paths13128<NestedConfig13128>;

interface HeavyProps13128 {
  config: DeepPartial13128<NestedConfig13128>;
  path?: ConfigPaths13128;
}

const HeavyComponent13128 = memo(function HeavyComponent13128({ config }: HeavyProps13128) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13128) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13128 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13128: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13128.displayName = 'HeavyComponent13128';
export default HeavyComponent13128;
