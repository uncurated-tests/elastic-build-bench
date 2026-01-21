'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5514<T> = T extends (infer U)[]
  ? DeepReadonlyArray5514<U>
  : T extends object
  ? DeepReadonlyObject5514<T>
  : T;

interface DeepReadonlyArray5514<T> extends ReadonlyArray<DeepReadonly5514<T>> {}

type DeepReadonlyObject5514<T> = {
  readonly [P in keyof T]: DeepReadonly5514<T[P]>;
};

type UnionToIntersection5514<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5514<T> = UnionToIntersection5514<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5514<T extends unknown[], V> = [...T, V];

type TuplifyUnion5514<T, L = LastOf5514<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5514<TuplifyUnion5514<Exclude<T, L>>, L>;

type DeepPartial5514<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5514<T[P]> }
  : T;

type Paths5514<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5514<K, Paths5514<T[K], Prev5514[D]>> : never }[keyof T]
  : never;

type Prev5514 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5514<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5514 {
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

type ConfigPaths5514 = Paths5514<NestedConfig5514>;

interface HeavyProps5514 {
  config: DeepPartial5514<NestedConfig5514>;
  path?: ConfigPaths5514;
}

const HeavyComponent5514 = memo(function HeavyComponent5514({ config }: HeavyProps5514) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5514) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5514 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5514: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5514.displayName = 'HeavyComponent5514';
export default HeavyComponent5514;
