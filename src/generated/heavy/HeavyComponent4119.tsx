'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4119<T> = T extends (infer U)[]
  ? DeepReadonlyArray4119<U>
  : T extends object
  ? DeepReadonlyObject4119<T>
  : T;

interface DeepReadonlyArray4119<T> extends ReadonlyArray<DeepReadonly4119<T>> {}

type DeepReadonlyObject4119<T> = {
  readonly [P in keyof T]: DeepReadonly4119<T[P]>;
};

type UnionToIntersection4119<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4119<T> = UnionToIntersection4119<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4119<T extends unknown[], V> = [...T, V];

type TuplifyUnion4119<T, L = LastOf4119<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4119<TuplifyUnion4119<Exclude<T, L>>, L>;

type DeepPartial4119<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4119<T[P]> }
  : T;

type Paths4119<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4119<K, Paths4119<T[K], Prev4119[D]>> : never }[keyof T]
  : never;

type Prev4119 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4119<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4119 {
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

type ConfigPaths4119 = Paths4119<NestedConfig4119>;

interface HeavyProps4119 {
  config: DeepPartial4119<NestedConfig4119>;
  path?: ConfigPaths4119;
}

const HeavyComponent4119 = memo(function HeavyComponent4119({ config }: HeavyProps4119) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4119) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4119 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4119: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4119.displayName = 'HeavyComponent4119';
export default HeavyComponent4119;
