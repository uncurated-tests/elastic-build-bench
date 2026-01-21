'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly481<T> = T extends (infer U)[]
  ? DeepReadonlyArray481<U>
  : T extends object
  ? DeepReadonlyObject481<T>
  : T;

interface DeepReadonlyArray481<T> extends ReadonlyArray<DeepReadonly481<T>> {}

type DeepReadonlyObject481<T> = {
  readonly [P in keyof T]: DeepReadonly481<T[P]>;
};

type UnionToIntersection481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf481<T> = UnionToIntersection481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push481<T extends unknown[], V> = [...T, V];

type TuplifyUnion481<T, L = LastOf481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push481<TuplifyUnion481<Exclude<T, L>>, L>;

type DeepPartial481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial481<T[P]> }
  : T;

type Paths481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join481<K, Paths481<T[K], Prev481[D]>> : never }[keyof T]
  : never;

type Prev481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig481 {
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

type ConfigPaths481 = Paths481<NestedConfig481>;

interface HeavyProps481 {
  config: DeepPartial481<NestedConfig481>;
  path?: ConfigPaths481;
}

const HeavyComponent481 = memo(function HeavyComponent481({ config }: HeavyProps481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent481.displayName = 'HeavyComponent481';
export default HeavyComponent481;
