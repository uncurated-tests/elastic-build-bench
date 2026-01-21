'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5256<T> = T extends (infer U)[]
  ? DeepReadonlyArray5256<U>
  : T extends object
  ? DeepReadonlyObject5256<T>
  : T;

interface DeepReadonlyArray5256<T> extends ReadonlyArray<DeepReadonly5256<T>> {}

type DeepReadonlyObject5256<T> = {
  readonly [P in keyof T]: DeepReadonly5256<T[P]>;
};

type UnionToIntersection5256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5256<T> = UnionToIntersection5256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5256<T extends unknown[], V> = [...T, V];

type TuplifyUnion5256<T, L = LastOf5256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5256<TuplifyUnion5256<Exclude<T, L>>, L>;

type DeepPartial5256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5256<T[P]> }
  : T;

type Paths5256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5256<K, Paths5256<T[K], Prev5256[D]>> : never }[keyof T]
  : never;

type Prev5256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5256 {
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

type ConfigPaths5256 = Paths5256<NestedConfig5256>;

interface HeavyProps5256 {
  config: DeepPartial5256<NestedConfig5256>;
  path?: ConfigPaths5256;
}

const HeavyComponent5256 = memo(function HeavyComponent5256({ config }: HeavyProps5256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5256.displayName = 'HeavyComponent5256';
export default HeavyComponent5256;
