'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5818<T> = T extends (infer U)[]
  ? DeepReadonlyArray5818<U>
  : T extends object
  ? DeepReadonlyObject5818<T>
  : T;

interface DeepReadonlyArray5818<T> extends ReadonlyArray<DeepReadonly5818<T>> {}

type DeepReadonlyObject5818<T> = {
  readonly [P in keyof T]: DeepReadonly5818<T[P]>;
};

type UnionToIntersection5818<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5818<T> = UnionToIntersection5818<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5818<T extends unknown[], V> = [...T, V];

type TuplifyUnion5818<T, L = LastOf5818<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5818<TuplifyUnion5818<Exclude<T, L>>, L>;

type DeepPartial5818<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5818<T[P]> }
  : T;

type Paths5818<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5818<K, Paths5818<T[K], Prev5818[D]>> : never }[keyof T]
  : never;

type Prev5818 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5818<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5818 {
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

type ConfigPaths5818 = Paths5818<NestedConfig5818>;

interface HeavyProps5818 {
  config: DeepPartial5818<NestedConfig5818>;
  path?: ConfigPaths5818;
}

const HeavyComponent5818 = memo(function HeavyComponent5818({ config }: HeavyProps5818) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5818) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5818 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5818: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5818.displayName = 'HeavyComponent5818';
export default HeavyComponent5818;
