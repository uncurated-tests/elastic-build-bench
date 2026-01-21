'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4065<T> = T extends (infer U)[]
  ? DeepReadonlyArray4065<U>
  : T extends object
  ? DeepReadonlyObject4065<T>
  : T;

interface DeepReadonlyArray4065<T> extends ReadonlyArray<DeepReadonly4065<T>> {}

type DeepReadonlyObject4065<T> = {
  readonly [P in keyof T]: DeepReadonly4065<T[P]>;
};

type UnionToIntersection4065<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4065<T> = UnionToIntersection4065<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4065<T extends unknown[], V> = [...T, V];

type TuplifyUnion4065<T, L = LastOf4065<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4065<TuplifyUnion4065<Exclude<T, L>>, L>;

type DeepPartial4065<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4065<T[P]> }
  : T;

type Paths4065<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4065<K, Paths4065<T[K], Prev4065[D]>> : never }[keyof T]
  : never;

type Prev4065 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4065<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4065 {
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

type ConfigPaths4065 = Paths4065<NestedConfig4065>;

interface HeavyProps4065 {
  config: DeepPartial4065<NestedConfig4065>;
  path?: ConfigPaths4065;
}

const HeavyComponent4065 = memo(function HeavyComponent4065({ config }: HeavyProps4065) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4065) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4065 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4065: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4065.displayName = 'HeavyComponent4065';
export default HeavyComponent4065;
