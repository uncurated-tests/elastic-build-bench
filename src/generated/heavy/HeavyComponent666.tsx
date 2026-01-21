'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly666<T> = T extends (infer U)[]
  ? DeepReadonlyArray666<U>
  : T extends object
  ? DeepReadonlyObject666<T>
  : T;

interface DeepReadonlyArray666<T> extends ReadonlyArray<DeepReadonly666<T>> {}

type DeepReadonlyObject666<T> = {
  readonly [P in keyof T]: DeepReadonly666<T[P]>;
};

type UnionToIntersection666<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf666<T> = UnionToIntersection666<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push666<T extends unknown[], V> = [...T, V];

type TuplifyUnion666<T, L = LastOf666<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push666<TuplifyUnion666<Exclude<T, L>>, L>;

type DeepPartial666<T> = T extends object
  ? { [P in keyof T]?: DeepPartial666<T[P]> }
  : T;

type Paths666<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join666<K, Paths666<T[K], Prev666[D]>> : never }[keyof T]
  : never;

type Prev666 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join666<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig666 {
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

type ConfigPaths666 = Paths666<NestedConfig666>;

interface HeavyProps666 {
  config: DeepPartial666<NestedConfig666>;
  path?: ConfigPaths666;
}

const HeavyComponent666 = memo(function HeavyComponent666({ config }: HeavyProps666) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 666) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-666 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H666: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent666.displayName = 'HeavyComponent666';
export default HeavyComponent666;
