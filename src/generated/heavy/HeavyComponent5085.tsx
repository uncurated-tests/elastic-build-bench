'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5085<T> = T extends (infer U)[]
  ? DeepReadonlyArray5085<U>
  : T extends object
  ? DeepReadonlyObject5085<T>
  : T;

interface DeepReadonlyArray5085<T> extends ReadonlyArray<DeepReadonly5085<T>> {}

type DeepReadonlyObject5085<T> = {
  readonly [P in keyof T]: DeepReadonly5085<T[P]>;
};

type UnionToIntersection5085<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5085<T> = UnionToIntersection5085<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5085<T extends unknown[], V> = [...T, V];

type TuplifyUnion5085<T, L = LastOf5085<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5085<TuplifyUnion5085<Exclude<T, L>>, L>;

type DeepPartial5085<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5085<T[P]> }
  : T;

type Paths5085<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5085<K, Paths5085<T[K], Prev5085[D]>> : never }[keyof T]
  : never;

type Prev5085 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5085<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5085 {
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

type ConfigPaths5085 = Paths5085<NestedConfig5085>;

interface HeavyProps5085 {
  config: DeepPartial5085<NestedConfig5085>;
  path?: ConfigPaths5085;
}

const HeavyComponent5085 = memo(function HeavyComponent5085({ config }: HeavyProps5085) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5085) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5085 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5085: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5085.displayName = 'HeavyComponent5085';
export default HeavyComponent5085;
