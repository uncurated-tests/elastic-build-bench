'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4951<T> = T extends (infer U)[]
  ? DeepReadonlyArray4951<U>
  : T extends object
  ? DeepReadonlyObject4951<T>
  : T;

interface DeepReadonlyArray4951<T> extends ReadonlyArray<DeepReadonly4951<T>> {}

type DeepReadonlyObject4951<T> = {
  readonly [P in keyof T]: DeepReadonly4951<T[P]>;
};

type UnionToIntersection4951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4951<T> = UnionToIntersection4951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4951<T extends unknown[], V> = [...T, V];

type TuplifyUnion4951<T, L = LastOf4951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4951<TuplifyUnion4951<Exclude<T, L>>, L>;

type DeepPartial4951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4951<T[P]> }
  : T;

type Paths4951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4951<K, Paths4951<T[K], Prev4951[D]>> : never }[keyof T]
  : never;

type Prev4951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4951 {
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

type ConfigPaths4951 = Paths4951<NestedConfig4951>;

interface HeavyProps4951 {
  config: DeepPartial4951<NestedConfig4951>;
  path?: ConfigPaths4951;
}

const HeavyComponent4951 = memo(function HeavyComponent4951({ config }: HeavyProps4951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4951.displayName = 'HeavyComponent4951';
export default HeavyComponent4951;
