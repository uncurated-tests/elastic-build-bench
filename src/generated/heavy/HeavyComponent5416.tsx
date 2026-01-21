'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5416<T> = T extends (infer U)[]
  ? DeepReadonlyArray5416<U>
  : T extends object
  ? DeepReadonlyObject5416<T>
  : T;

interface DeepReadonlyArray5416<T> extends ReadonlyArray<DeepReadonly5416<T>> {}

type DeepReadonlyObject5416<T> = {
  readonly [P in keyof T]: DeepReadonly5416<T[P]>;
};

type UnionToIntersection5416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5416<T> = UnionToIntersection5416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5416<T extends unknown[], V> = [...T, V];

type TuplifyUnion5416<T, L = LastOf5416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5416<TuplifyUnion5416<Exclude<T, L>>, L>;

type DeepPartial5416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5416<T[P]> }
  : T;

type Paths5416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5416<K, Paths5416<T[K], Prev5416[D]>> : never }[keyof T]
  : never;

type Prev5416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5416 {
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

type ConfigPaths5416 = Paths5416<NestedConfig5416>;

interface HeavyProps5416 {
  config: DeepPartial5416<NestedConfig5416>;
  path?: ConfigPaths5416;
}

const HeavyComponent5416 = memo(function HeavyComponent5416({ config }: HeavyProps5416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5416.displayName = 'HeavyComponent5416';
export default HeavyComponent5416;
