'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5344<T> = T extends (infer U)[]
  ? DeepReadonlyArray5344<U>
  : T extends object
  ? DeepReadonlyObject5344<T>
  : T;

interface DeepReadonlyArray5344<T> extends ReadonlyArray<DeepReadonly5344<T>> {}

type DeepReadonlyObject5344<T> = {
  readonly [P in keyof T]: DeepReadonly5344<T[P]>;
};

type UnionToIntersection5344<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5344<T> = UnionToIntersection5344<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5344<T extends unknown[], V> = [...T, V];

type TuplifyUnion5344<T, L = LastOf5344<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5344<TuplifyUnion5344<Exclude<T, L>>, L>;

type DeepPartial5344<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5344<T[P]> }
  : T;

type Paths5344<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5344<K, Paths5344<T[K], Prev5344[D]>> : never }[keyof T]
  : never;

type Prev5344 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5344<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5344 {
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

type ConfigPaths5344 = Paths5344<NestedConfig5344>;

interface HeavyProps5344 {
  config: DeepPartial5344<NestedConfig5344>;
  path?: ConfigPaths5344;
}

const HeavyComponent5344 = memo(function HeavyComponent5344({ config }: HeavyProps5344) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5344) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5344 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5344: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5344.displayName = 'HeavyComponent5344';
export default HeavyComponent5344;
