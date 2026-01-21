'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5228<T> = T extends (infer U)[]
  ? DeepReadonlyArray5228<U>
  : T extends object
  ? DeepReadonlyObject5228<T>
  : T;

interface DeepReadonlyArray5228<T> extends ReadonlyArray<DeepReadonly5228<T>> {}

type DeepReadonlyObject5228<T> = {
  readonly [P in keyof T]: DeepReadonly5228<T[P]>;
};

type UnionToIntersection5228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5228<T> = UnionToIntersection5228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5228<T extends unknown[], V> = [...T, V];

type TuplifyUnion5228<T, L = LastOf5228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5228<TuplifyUnion5228<Exclude<T, L>>, L>;

type DeepPartial5228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5228<T[P]> }
  : T;

type Paths5228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5228<K, Paths5228<T[K], Prev5228[D]>> : never }[keyof T]
  : never;

type Prev5228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5228 {
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

type ConfigPaths5228 = Paths5228<NestedConfig5228>;

interface HeavyProps5228 {
  config: DeepPartial5228<NestedConfig5228>;
  path?: ConfigPaths5228;
}

const HeavyComponent5228 = memo(function HeavyComponent5228({ config }: HeavyProps5228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5228.displayName = 'HeavyComponent5228';
export default HeavyComponent5228;
