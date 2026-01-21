'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5508<T> = T extends (infer U)[]
  ? DeepReadonlyArray5508<U>
  : T extends object
  ? DeepReadonlyObject5508<T>
  : T;

interface DeepReadonlyArray5508<T> extends ReadonlyArray<DeepReadonly5508<T>> {}

type DeepReadonlyObject5508<T> = {
  readonly [P in keyof T]: DeepReadonly5508<T[P]>;
};

type UnionToIntersection5508<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5508<T> = UnionToIntersection5508<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5508<T extends unknown[], V> = [...T, V];

type TuplifyUnion5508<T, L = LastOf5508<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5508<TuplifyUnion5508<Exclude<T, L>>, L>;

type DeepPartial5508<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5508<T[P]> }
  : T;

type Paths5508<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5508<K, Paths5508<T[K], Prev5508[D]>> : never }[keyof T]
  : never;

type Prev5508 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5508<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5508 {
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

type ConfigPaths5508 = Paths5508<NestedConfig5508>;

interface HeavyProps5508 {
  config: DeepPartial5508<NestedConfig5508>;
  path?: ConfigPaths5508;
}

const HeavyComponent5508 = memo(function HeavyComponent5508({ config }: HeavyProps5508) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5508) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5508 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5508: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5508.displayName = 'HeavyComponent5508';
export default HeavyComponent5508;
