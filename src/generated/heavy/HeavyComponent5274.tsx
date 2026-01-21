'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5274<T> = T extends (infer U)[]
  ? DeepReadonlyArray5274<U>
  : T extends object
  ? DeepReadonlyObject5274<T>
  : T;

interface DeepReadonlyArray5274<T> extends ReadonlyArray<DeepReadonly5274<T>> {}

type DeepReadonlyObject5274<T> = {
  readonly [P in keyof T]: DeepReadonly5274<T[P]>;
};

type UnionToIntersection5274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5274<T> = UnionToIntersection5274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5274<T extends unknown[], V> = [...T, V];

type TuplifyUnion5274<T, L = LastOf5274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5274<TuplifyUnion5274<Exclude<T, L>>, L>;

type DeepPartial5274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5274<T[P]> }
  : T;

type Paths5274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5274<K, Paths5274<T[K], Prev5274[D]>> : never }[keyof T]
  : never;

type Prev5274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5274 {
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

type ConfigPaths5274 = Paths5274<NestedConfig5274>;

interface HeavyProps5274 {
  config: DeepPartial5274<NestedConfig5274>;
  path?: ConfigPaths5274;
}

const HeavyComponent5274 = memo(function HeavyComponent5274({ config }: HeavyProps5274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5274.displayName = 'HeavyComponent5274';
export default HeavyComponent5274;
