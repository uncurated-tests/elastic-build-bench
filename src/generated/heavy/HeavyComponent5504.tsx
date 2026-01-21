'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5504<T> = T extends (infer U)[]
  ? DeepReadonlyArray5504<U>
  : T extends object
  ? DeepReadonlyObject5504<T>
  : T;

interface DeepReadonlyArray5504<T> extends ReadonlyArray<DeepReadonly5504<T>> {}

type DeepReadonlyObject5504<T> = {
  readonly [P in keyof T]: DeepReadonly5504<T[P]>;
};

type UnionToIntersection5504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5504<T> = UnionToIntersection5504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5504<T extends unknown[], V> = [...T, V];

type TuplifyUnion5504<T, L = LastOf5504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5504<TuplifyUnion5504<Exclude<T, L>>, L>;

type DeepPartial5504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5504<T[P]> }
  : T;

type Paths5504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5504<K, Paths5504<T[K], Prev5504[D]>> : never }[keyof T]
  : never;

type Prev5504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5504 {
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

type ConfigPaths5504 = Paths5504<NestedConfig5504>;

interface HeavyProps5504 {
  config: DeepPartial5504<NestedConfig5504>;
  path?: ConfigPaths5504;
}

const HeavyComponent5504 = memo(function HeavyComponent5504({ config }: HeavyProps5504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5504.displayName = 'HeavyComponent5504';
export default HeavyComponent5504;
