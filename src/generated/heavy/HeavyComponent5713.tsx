'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5713<T> = T extends (infer U)[]
  ? DeepReadonlyArray5713<U>
  : T extends object
  ? DeepReadonlyObject5713<T>
  : T;

interface DeepReadonlyArray5713<T> extends ReadonlyArray<DeepReadonly5713<T>> {}

type DeepReadonlyObject5713<T> = {
  readonly [P in keyof T]: DeepReadonly5713<T[P]>;
};

type UnionToIntersection5713<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5713<T> = UnionToIntersection5713<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5713<T extends unknown[], V> = [...T, V];

type TuplifyUnion5713<T, L = LastOf5713<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5713<TuplifyUnion5713<Exclude<T, L>>, L>;

type DeepPartial5713<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5713<T[P]> }
  : T;

type Paths5713<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5713<K, Paths5713<T[K], Prev5713[D]>> : never }[keyof T]
  : never;

type Prev5713 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5713<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5713 {
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

type ConfigPaths5713 = Paths5713<NestedConfig5713>;

interface HeavyProps5713 {
  config: DeepPartial5713<NestedConfig5713>;
  path?: ConfigPaths5713;
}

const HeavyComponent5713 = memo(function HeavyComponent5713({ config }: HeavyProps5713) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5713) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5713 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5713: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5713.displayName = 'HeavyComponent5713';
export default HeavyComponent5713;
