'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4481<T> = T extends (infer U)[]
  ? DeepReadonlyArray4481<U>
  : T extends object
  ? DeepReadonlyObject4481<T>
  : T;

interface DeepReadonlyArray4481<T> extends ReadonlyArray<DeepReadonly4481<T>> {}

type DeepReadonlyObject4481<T> = {
  readonly [P in keyof T]: DeepReadonly4481<T[P]>;
};

type UnionToIntersection4481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4481<T> = UnionToIntersection4481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4481<T extends unknown[], V> = [...T, V];

type TuplifyUnion4481<T, L = LastOf4481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4481<TuplifyUnion4481<Exclude<T, L>>, L>;

type DeepPartial4481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4481<T[P]> }
  : T;

type Paths4481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4481<K, Paths4481<T[K], Prev4481[D]>> : never }[keyof T]
  : never;

type Prev4481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4481 {
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

type ConfigPaths4481 = Paths4481<NestedConfig4481>;

interface HeavyProps4481 {
  config: DeepPartial4481<NestedConfig4481>;
  path?: ConfigPaths4481;
}

const HeavyComponent4481 = memo(function HeavyComponent4481({ config }: HeavyProps4481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4481.displayName = 'HeavyComponent4481';
export default HeavyComponent4481;
