'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5340<T> = T extends (infer U)[]
  ? DeepReadonlyArray5340<U>
  : T extends object
  ? DeepReadonlyObject5340<T>
  : T;

interface DeepReadonlyArray5340<T> extends ReadonlyArray<DeepReadonly5340<T>> {}

type DeepReadonlyObject5340<T> = {
  readonly [P in keyof T]: DeepReadonly5340<T[P]>;
};

type UnionToIntersection5340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5340<T> = UnionToIntersection5340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5340<T extends unknown[], V> = [...T, V];

type TuplifyUnion5340<T, L = LastOf5340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5340<TuplifyUnion5340<Exclude<T, L>>, L>;

type DeepPartial5340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5340<T[P]> }
  : T;

type Paths5340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5340<K, Paths5340<T[K], Prev5340[D]>> : never }[keyof T]
  : never;

type Prev5340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5340 {
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

type ConfigPaths5340 = Paths5340<NestedConfig5340>;

interface HeavyProps5340 {
  config: DeepPartial5340<NestedConfig5340>;
  path?: ConfigPaths5340;
}

const HeavyComponent5340 = memo(function HeavyComponent5340({ config }: HeavyProps5340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5340.displayName = 'HeavyComponent5340';
export default HeavyComponent5340;
