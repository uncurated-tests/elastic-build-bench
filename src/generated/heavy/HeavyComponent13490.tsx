'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13490<T> = T extends (infer U)[]
  ? DeepReadonlyArray13490<U>
  : T extends object
  ? DeepReadonlyObject13490<T>
  : T;

interface DeepReadonlyArray13490<T> extends ReadonlyArray<DeepReadonly13490<T>> {}

type DeepReadonlyObject13490<T> = {
  readonly [P in keyof T]: DeepReadonly13490<T[P]>;
};

type UnionToIntersection13490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13490<T> = UnionToIntersection13490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13490<T extends unknown[], V> = [...T, V];

type TuplifyUnion13490<T, L = LastOf13490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13490<TuplifyUnion13490<Exclude<T, L>>, L>;

type DeepPartial13490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13490<T[P]> }
  : T;

type Paths13490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13490<K, Paths13490<T[K], Prev13490[D]>> : never }[keyof T]
  : never;

type Prev13490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13490 {
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

type ConfigPaths13490 = Paths13490<NestedConfig13490>;

interface HeavyProps13490 {
  config: DeepPartial13490<NestedConfig13490>;
  path?: ConfigPaths13490;
}

const HeavyComponent13490 = memo(function HeavyComponent13490({ config }: HeavyProps13490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13490.displayName = 'HeavyComponent13490';
export default HeavyComponent13490;
