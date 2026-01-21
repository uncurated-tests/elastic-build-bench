'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5775<T> = T extends (infer U)[]
  ? DeepReadonlyArray5775<U>
  : T extends object
  ? DeepReadonlyObject5775<T>
  : T;

interface DeepReadonlyArray5775<T> extends ReadonlyArray<DeepReadonly5775<T>> {}

type DeepReadonlyObject5775<T> = {
  readonly [P in keyof T]: DeepReadonly5775<T[P]>;
};

type UnionToIntersection5775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5775<T> = UnionToIntersection5775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5775<T extends unknown[], V> = [...T, V];

type TuplifyUnion5775<T, L = LastOf5775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5775<TuplifyUnion5775<Exclude<T, L>>, L>;

type DeepPartial5775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5775<T[P]> }
  : T;

type Paths5775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5775<K, Paths5775<T[K], Prev5775[D]>> : never }[keyof T]
  : never;

type Prev5775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5775 {
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

type ConfigPaths5775 = Paths5775<NestedConfig5775>;

interface HeavyProps5775 {
  config: DeepPartial5775<NestedConfig5775>;
  path?: ConfigPaths5775;
}

const HeavyComponent5775 = memo(function HeavyComponent5775({ config }: HeavyProps5775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5775.displayName = 'HeavyComponent5775';
export default HeavyComponent5775;
