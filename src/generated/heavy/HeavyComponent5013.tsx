'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5013<T> = T extends (infer U)[]
  ? DeepReadonlyArray5013<U>
  : T extends object
  ? DeepReadonlyObject5013<T>
  : T;

interface DeepReadonlyArray5013<T> extends ReadonlyArray<DeepReadonly5013<T>> {}

type DeepReadonlyObject5013<T> = {
  readonly [P in keyof T]: DeepReadonly5013<T[P]>;
};

type UnionToIntersection5013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5013<T> = UnionToIntersection5013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5013<T extends unknown[], V> = [...T, V];

type TuplifyUnion5013<T, L = LastOf5013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5013<TuplifyUnion5013<Exclude<T, L>>, L>;

type DeepPartial5013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5013<T[P]> }
  : T;

type Paths5013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5013<K, Paths5013<T[K], Prev5013[D]>> : never }[keyof T]
  : never;

type Prev5013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5013 {
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

type ConfigPaths5013 = Paths5013<NestedConfig5013>;

interface HeavyProps5013 {
  config: DeepPartial5013<NestedConfig5013>;
  path?: ConfigPaths5013;
}

const HeavyComponent5013 = memo(function HeavyComponent5013({ config }: HeavyProps5013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5013.displayName = 'HeavyComponent5013';
export default HeavyComponent5013;
