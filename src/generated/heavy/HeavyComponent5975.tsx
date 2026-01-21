'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5975<T> = T extends (infer U)[]
  ? DeepReadonlyArray5975<U>
  : T extends object
  ? DeepReadonlyObject5975<T>
  : T;

interface DeepReadonlyArray5975<T> extends ReadonlyArray<DeepReadonly5975<T>> {}

type DeepReadonlyObject5975<T> = {
  readonly [P in keyof T]: DeepReadonly5975<T[P]>;
};

type UnionToIntersection5975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5975<T> = UnionToIntersection5975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5975<T extends unknown[], V> = [...T, V];

type TuplifyUnion5975<T, L = LastOf5975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5975<TuplifyUnion5975<Exclude<T, L>>, L>;

type DeepPartial5975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5975<T[P]> }
  : T;

type Paths5975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5975<K, Paths5975<T[K], Prev5975[D]>> : never }[keyof T]
  : never;

type Prev5975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5975 {
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

type ConfigPaths5975 = Paths5975<NestedConfig5975>;

interface HeavyProps5975 {
  config: DeepPartial5975<NestedConfig5975>;
  path?: ConfigPaths5975;
}

const HeavyComponent5975 = memo(function HeavyComponent5975({ config }: HeavyProps5975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5975.displayName = 'HeavyComponent5975';
export default HeavyComponent5975;
