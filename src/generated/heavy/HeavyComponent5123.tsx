'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5123<T> = T extends (infer U)[]
  ? DeepReadonlyArray5123<U>
  : T extends object
  ? DeepReadonlyObject5123<T>
  : T;

interface DeepReadonlyArray5123<T> extends ReadonlyArray<DeepReadonly5123<T>> {}

type DeepReadonlyObject5123<T> = {
  readonly [P in keyof T]: DeepReadonly5123<T[P]>;
};

type UnionToIntersection5123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5123<T> = UnionToIntersection5123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5123<T extends unknown[], V> = [...T, V];

type TuplifyUnion5123<T, L = LastOf5123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5123<TuplifyUnion5123<Exclude<T, L>>, L>;

type DeepPartial5123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5123<T[P]> }
  : T;

type Paths5123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5123<K, Paths5123<T[K], Prev5123[D]>> : never }[keyof T]
  : never;

type Prev5123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5123 {
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

type ConfigPaths5123 = Paths5123<NestedConfig5123>;

interface HeavyProps5123 {
  config: DeepPartial5123<NestedConfig5123>;
  path?: ConfigPaths5123;
}

const HeavyComponent5123 = memo(function HeavyComponent5123({ config }: HeavyProps5123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5123.displayName = 'HeavyComponent5123';
export default HeavyComponent5123;
