'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5253<T> = T extends (infer U)[]
  ? DeepReadonlyArray5253<U>
  : T extends object
  ? DeepReadonlyObject5253<T>
  : T;

interface DeepReadonlyArray5253<T> extends ReadonlyArray<DeepReadonly5253<T>> {}

type DeepReadonlyObject5253<T> = {
  readonly [P in keyof T]: DeepReadonly5253<T[P]>;
};

type UnionToIntersection5253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5253<T> = UnionToIntersection5253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5253<T extends unknown[], V> = [...T, V];

type TuplifyUnion5253<T, L = LastOf5253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5253<TuplifyUnion5253<Exclude<T, L>>, L>;

type DeepPartial5253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5253<T[P]> }
  : T;

type Paths5253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5253<K, Paths5253<T[K], Prev5253[D]>> : never }[keyof T]
  : never;

type Prev5253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5253 {
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

type ConfigPaths5253 = Paths5253<NestedConfig5253>;

interface HeavyProps5253 {
  config: DeepPartial5253<NestedConfig5253>;
  path?: ConfigPaths5253;
}

const HeavyComponent5253 = memo(function HeavyComponent5253({ config }: HeavyProps5253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5253.displayName = 'HeavyComponent5253';
export default HeavyComponent5253;
