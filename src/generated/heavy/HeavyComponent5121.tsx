'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5121<T> = T extends (infer U)[]
  ? DeepReadonlyArray5121<U>
  : T extends object
  ? DeepReadonlyObject5121<T>
  : T;

interface DeepReadonlyArray5121<T> extends ReadonlyArray<DeepReadonly5121<T>> {}

type DeepReadonlyObject5121<T> = {
  readonly [P in keyof T]: DeepReadonly5121<T[P]>;
};

type UnionToIntersection5121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5121<T> = UnionToIntersection5121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5121<T extends unknown[], V> = [...T, V];

type TuplifyUnion5121<T, L = LastOf5121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5121<TuplifyUnion5121<Exclude<T, L>>, L>;

type DeepPartial5121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5121<T[P]> }
  : T;

type Paths5121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5121<K, Paths5121<T[K], Prev5121[D]>> : never }[keyof T]
  : never;

type Prev5121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5121 {
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

type ConfigPaths5121 = Paths5121<NestedConfig5121>;

interface HeavyProps5121 {
  config: DeepPartial5121<NestedConfig5121>;
  path?: ConfigPaths5121;
}

const HeavyComponent5121 = memo(function HeavyComponent5121({ config }: HeavyProps5121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5121.displayName = 'HeavyComponent5121';
export default HeavyComponent5121;
