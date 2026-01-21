'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5769<T> = T extends (infer U)[]
  ? DeepReadonlyArray5769<U>
  : T extends object
  ? DeepReadonlyObject5769<T>
  : T;

interface DeepReadonlyArray5769<T> extends ReadonlyArray<DeepReadonly5769<T>> {}

type DeepReadonlyObject5769<T> = {
  readonly [P in keyof T]: DeepReadonly5769<T[P]>;
};

type UnionToIntersection5769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5769<T> = UnionToIntersection5769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5769<T extends unknown[], V> = [...T, V];

type TuplifyUnion5769<T, L = LastOf5769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5769<TuplifyUnion5769<Exclude<T, L>>, L>;

type DeepPartial5769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5769<T[P]> }
  : T;

type Paths5769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5769<K, Paths5769<T[K], Prev5769[D]>> : never }[keyof T]
  : never;

type Prev5769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5769 {
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

type ConfigPaths5769 = Paths5769<NestedConfig5769>;

interface HeavyProps5769 {
  config: DeepPartial5769<NestedConfig5769>;
  path?: ConfigPaths5769;
}

const HeavyComponent5769 = memo(function HeavyComponent5769({ config }: HeavyProps5769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5769.displayName = 'HeavyComponent5769';
export default HeavyComponent5769;
