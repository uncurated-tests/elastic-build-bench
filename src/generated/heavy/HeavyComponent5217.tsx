'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5217<T> = T extends (infer U)[]
  ? DeepReadonlyArray5217<U>
  : T extends object
  ? DeepReadonlyObject5217<T>
  : T;

interface DeepReadonlyArray5217<T> extends ReadonlyArray<DeepReadonly5217<T>> {}

type DeepReadonlyObject5217<T> = {
  readonly [P in keyof T]: DeepReadonly5217<T[P]>;
};

type UnionToIntersection5217<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5217<T> = UnionToIntersection5217<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5217<T extends unknown[], V> = [...T, V];

type TuplifyUnion5217<T, L = LastOf5217<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5217<TuplifyUnion5217<Exclude<T, L>>, L>;

type DeepPartial5217<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5217<T[P]> }
  : T;

type Paths5217<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5217<K, Paths5217<T[K], Prev5217[D]>> : never }[keyof T]
  : never;

type Prev5217 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5217<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5217 {
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

type ConfigPaths5217 = Paths5217<NestedConfig5217>;

interface HeavyProps5217 {
  config: DeepPartial5217<NestedConfig5217>;
  path?: ConfigPaths5217;
}

const HeavyComponent5217 = memo(function HeavyComponent5217({ config }: HeavyProps5217) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5217) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5217 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5217: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5217.displayName = 'HeavyComponent5217';
export default HeavyComponent5217;
