'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6477<T> = T extends (infer U)[]
  ? DeepReadonlyArray6477<U>
  : T extends object
  ? DeepReadonlyObject6477<T>
  : T;

interface DeepReadonlyArray6477<T> extends ReadonlyArray<DeepReadonly6477<T>> {}

type DeepReadonlyObject6477<T> = {
  readonly [P in keyof T]: DeepReadonly6477<T[P]>;
};

type UnionToIntersection6477<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6477<T> = UnionToIntersection6477<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6477<T extends unknown[], V> = [...T, V];

type TuplifyUnion6477<T, L = LastOf6477<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6477<TuplifyUnion6477<Exclude<T, L>>, L>;

type DeepPartial6477<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6477<T[P]> }
  : T;

type Paths6477<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6477<K, Paths6477<T[K], Prev6477[D]>> : never }[keyof T]
  : never;

type Prev6477 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6477<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6477 {
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

type ConfigPaths6477 = Paths6477<NestedConfig6477>;

interface HeavyProps6477 {
  config: DeepPartial6477<NestedConfig6477>;
  path?: ConfigPaths6477;
}

const HeavyComponent6477 = memo(function HeavyComponent6477({ config }: HeavyProps6477) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6477) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6477 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6477: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6477.displayName = 'HeavyComponent6477';
export default HeavyComponent6477;
