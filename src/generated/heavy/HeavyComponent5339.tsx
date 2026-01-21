'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5339<T> = T extends (infer U)[]
  ? DeepReadonlyArray5339<U>
  : T extends object
  ? DeepReadonlyObject5339<T>
  : T;

interface DeepReadonlyArray5339<T> extends ReadonlyArray<DeepReadonly5339<T>> {}

type DeepReadonlyObject5339<T> = {
  readonly [P in keyof T]: DeepReadonly5339<T[P]>;
};

type UnionToIntersection5339<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5339<T> = UnionToIntersection5339<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5339<T extends unknown[], V> = [...T, V];

type TuplifyUnion5339<T, L = LastOf5339<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5339<TuplifyUnion5339<Exclude<T, L>>, L>;

type DeepPartial5339<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5339<T[P]> }
  : T;

type Paths5339<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5339<K, Paths5339<T[K], Prev5339[D]>> : never }[keyof T]
  : never;

type Prev5339 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5339<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5339 {
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

type ConfigPaths5339 = Paths5339<NestedConfig5339>;

interface HeavyProps5339 {
  config: DeepPartial5339<NestedConfig5339>;
  path?: ConfigPaths5339;
}

const HeavyComponent5339 = memo(function HeavyComponent5339({ config }: HeavyProps5339) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5339) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5339 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5339: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5339.displayName = 'HeavyComponent5339';
export default HeavyComponent5339;
