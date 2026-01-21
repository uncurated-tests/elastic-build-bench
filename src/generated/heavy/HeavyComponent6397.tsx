'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6397<T> = T extends (infer U)[]
  ? DeepReadonlyArray6397<U>
  : T extends object
  ? DeepReadonlyObject6397<T>
  : T;

interface DeepReadonlyArray6397<T> extends ReadonlyArray<DeepReadonly6397<T>> {}

type DeepReadonlyObject6397<T> = {
  readonly [P in keyof T]: DeepReadonly6397<T[P]>;
};

type UnionToIntersection6397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6397<T> = UnionToIntersection6397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6397<T extends unknown[], V> = [...T, V];

type TuplifyUnion6397<T, L = LastOf6397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6397<TuplifyUnion6397<Exclude<T, L>>, L>;

type DeepPartial6397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6397<T[P]> }
  : T;

type Paths6397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6397<K, Paths6397<T[K], Prev6397[D]>> : never }[keyof T]
  : never;

type Prev6397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6397 {
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

type ConfigPaths6397 = Paths6397<NestedConfig6397>;

interface HeavyProps6397 {
  config: DeepPartial6397<NestedConfig6397>;
  path?: ConfigPaths6397;
}

const HeavyComponent6397 = memo(function HeavyComponent6397({ config }: HeavyProps6397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6397.displayName = 'HeavyComponent6397';
export default HeavyComponent6397;
