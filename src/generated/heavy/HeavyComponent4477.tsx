'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4477<T> = T extends (infer U)[]
  ? DeepReadonlyArray4477<U>
  : T extends object
  ? DeepReadonlyObject4477<T>
  : T;

interface DeepReadonlyArray4477<T> extends ReadonlyArray<DeepReadonly4477<T>> {}

type DeepReadonlyObject4477<T> = {
  readonly [P in keyof T]: DeepReadonly4477<T[P]>;
};

type UnionToIntersection4477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4477<T> = UnionToIntersection4477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4477<T extends unknown[], V> = [...T, V];

type TuplifyUnion4477<T, L = LastOf4477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4477<TuplifyUnion4477<Exclude<T, L>>, L>;

type DeepPartial4477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4477<T[P]> }
  : T;

type Paths4477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4477<K, Paths4477<T[K], Prev4477[D]>> : never }[keyof T]
  : never;

type Prev4477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4477 {
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

type ConfigPaths4477 = Paths4477<NestedConfig4477>;

interface HeavyProps4477 {
  config: DeepPartial4477<NestedConfig4477>;
  path?: ConfigPaths4477;
}

const HeavyComponent4477 = memo(function HeavyComponent4477({ config }: HeavyProps4477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4477.displayName = 'HeavyComponent4477';
export default HeavyComponent4477;
