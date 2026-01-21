'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2397<T> = T extends (infer U)[]
  ? DeepReadonlyArray2397<U>
  : T extends object
  ? DeepReadonlyObject2397<T>
  : T;

interface DeepReadonlyArray2397<T> extends ReadonlyArray<DeepReadonly2397<T>> {}

type DeepReadonlyObject2397<T> = {
  readonly [P in keyof T]: DeepReadonly2397<T[P]>;
};

type UnionToIntersection2397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2397<T> = UnionToIntersection2397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2397<T extends unknown[], V> = [...T, V];

type TuplifyUnion2397<T, L = LastOf2397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2397<TuplifyUnion2397<Exclude<T, L>>, L>;

type DeepPartial2397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2397<T[P]> }
  : T;

type Paths2397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2397<K, Paths2397<T[K], Prev2397[D]>> : never }[keyof T]
  : never;

type Prev2397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2397 {
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

type ConfigPaths2397 = Paths2397<NestedConfig2397>;

interface HeavyProps2397 {
  config: DeepPartial2397<NestedConfig2397>;
  path?: ConfigPaths2397;
}

const HeavyComponent2397 = memo(function HeavyComponent2397({ config }: HeavyProps2397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2397.displayName = 'HeavyComponent2397';
export default HeavyComponent2397;
