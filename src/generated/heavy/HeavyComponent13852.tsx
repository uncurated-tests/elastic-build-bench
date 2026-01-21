'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13852<T> = T extends (infer U)[]
  ? DeepReadonlyArray13852<U>
  : T extends object
  ? DeepReadonlyObject13852<T>
  : T;

interface DeepReadonlyArray13852<T> extends ReadonlyArray<DeepReadonly13852<T>> {}

type DeepReadonlyObject13852<T> = {
  readonly [P in keyof T]: DeepReadonly13852<T[P]>;
};

type UnionToIntersection13852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13852<T> = UnionToIntersection13852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13852<T extends unknown[], V> = [...T, V];

type TuplifyUnion13852<T, L = LastOf13852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13852<TuplifyUnion13852<Exclude<T, L>>, L>;

type DeepPartial13852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13852<T[P]> }
  : T;

type Paths13852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13852<K, Paths13852<T[K], Prev13852[D]>> : never }[keyof T]
  : never;

type Prev13852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13852 {
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

type ConfigPaths13852 = Paths13852<NestedConfig13852>;

interface HeavyProps13852 {
  config: DeepPartial13852<NestedConfig13852>;
  path?: ConfigPaths13852;
}

const HeavyComponent13852 = memo(function HeavyComponent13852({ config }: HeavyProps13852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13852.displayName = 'HeavyComponent13852';
export default HeavyComponent13852;
