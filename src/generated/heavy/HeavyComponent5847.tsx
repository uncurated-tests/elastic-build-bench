'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5847<T> = T extends (infer U)[]
  ? DeepReadonlyArray5847<U>
  : T extends object
  ? DeepReadonlyObject5847<T>
  : T;

interface DeepReadonlyArray5847<T> extends ReadonlyArray<DeepReadonly5847<T>> {}

type DeepReadonlyObject5847<T> = {
  readonly [P in keyof T]: DeepReadonly5847<T[P]>;
};

type UnionToIntersection5847<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5847<T> = UnionToIntersection5847<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5847<T extends unknown[], V> = [...T, V];

type TuplifyUnion5847<T, L = LastOf5847<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5847<TuplifyUnion5847<Exclude<T, L>>, L>;

type DeepPartial5847<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5847<T[P]> }
  : T;

type Paths5847<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5847<K, Paths5847<T[K], Prev5847[D]>> : never }[keyof T]
  : never;

type Prev5847 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5847<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5847 {
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

type ConfigPaths5847 = Paths5847<NestedConfig5847>;

interface HeavyProps5847 {
  config: DeepPartial5847<NestedConfig5847>;
  path?: ConfigPaths5847;
}

const HeavyComponent5847 = memo(function HeavyComponent5847({ config }: HeavyProps5847) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5847) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5847 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5847: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5847.displayName = 'HeavyComponent5847';
export default HeavyComponent5847;
