'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13551<T> = T extends (infer U)[]
  ? DeepReadonlyArray13551<U>
  : T extends object
  ? DeepReadonlyObject13551<T>
  : T;

interface DeepReadonlyArray13551<T> extends ReadonlyArray<DeepReadonly13551<T>> {}

type DeepReadonlyObject13551<T> = {
  readonly [P in keyof T]: DeepReadonly13551<T[P]>;
};

type UnionToIntersection13551<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13551<T> = UnionToIntersection13551<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13551<T extends unknown[], V> = [...T, V];

type TuplifyUnion13551<T, L = LastOf13551<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13551<TuplifyUnion13551<Exclude<T, L>>, L>;

type DeepPartial13551<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13551<T[P]> }
  : T;

type Paths13551<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13551<K, Paths13551<T[K], Prev13551[D]>> : never }[keyof T]
  : never;

type Prev13551 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13551<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13551 {
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

type ConfigPaths13551 = Paths13551<NestedConfig13551>;

interface HeavyProps13551 {
  config: DeepPartial13551<NestedConfig13551>;
  path?: ConfigPaths13551;
}

const HeavyComponent13551 = memo(function HeavyComponent13551({ config }: HeavyProps13551) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13551) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13551 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13551: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13551.displayName = 'HeavyComponent13551';
export default HeavyComponent13551;
