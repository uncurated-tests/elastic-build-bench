'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4397<T> = T extends (infer U)[]
  ? DeepReadonlyArray4397<U>
  : T extends object
  ? DeepReadonlyObject4397<T>
  : T;

interface DeepReadonlyArray4397<T> extends ReadonlyArray<DeepReadonly4397<T>> {}

type DeepReadonlyObject4397<T> = {
  readonly [P in keyof T]: DeepReadonly4397<T[P]>;
};

type UnionToIntersection4397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4397<T> = UnionToIntersection4397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4397<T extends unknown[], V> = [...T, V];

type TuplifyUnion4397<T, L = LastOf4397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4397<TuplifyUnion4397<Exclude<T, L>>, L>;

type DeepPartial4397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4397<T[P]> }
  : T;

type Paths4397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4397<K, Paths4397<T[K], Prev4397[D]>> : never }[keyof T]
  : never;

type Prev4397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4397 {
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

type ConfigPaths4397 = Paths4397<NestedConfig4397>;

interface HeavyProps4397 {
  config: DeepPartial4397<NestedConfig4397>;
  path?: ConfigPaths4397;
}

const HeavyComponent4397 = memo(function HeavyComponent4397({ config }: HeavyProps4397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4397.displayName = 'HeavyComponent4397';
export default HeavyComponent4397;
