'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5337<T> = T extends (infer U)[]
  ? DeepReadonlyArray5337<U>
  : T extends object
  ? DeepReadonlyObject5337<T>
  : T;

interface DeepReadonlyArray5337<T> extends ReadonlyArray<DeepReadonly5337<T>> {}

type DeepReadonlyObject5337<T> = {
  readonly [P in keyof T]: DeepReadonly5337<T[P]>;
};

type UnionToIntersection5337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5337<T> = UnionToIntersection5337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5337<T extends unknown[], V> = [...T, V];

type TuplifyUnion5337<T, L = LastOf5337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5337<TuplifyUnion5337<Exclude<T, L>>, L>;

type DeepPartial5337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5337<T[P]> }
  : T;

type Paths5337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5337<K, Paths5337<T[K], Prev5337[D]>> : never }[keyof T]
  : never;

type Prev5337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5337 {
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

type ConfigPaths5337 = Paths5337<NestedConfig5337>;

interface HeavyProps5337 {
  config: DeepPartial5337<NestedConfig5337>;
  path?: ConfigPaths5337;
}

const HeavyComponent5337 = memo(function HeavyComponent5337({ config }: HeavyProps5337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5337.displayName = 'HeavyComponent5337';
export default HeavyComponent5337;
