'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5489<T> = T extends (infer U)[]
  ? DeepReadonlyArray5489<U>
  : T extends object
  ? DeepReadonlyObject5489<T>
  : T;

interface DeepReadonlyArray5489<T> extends ReadonlyArray<DeepReadonly5489<T>> {}

type DeepReadonlyObject5489<T> = {
  readonly [P in keyof T]: DeepReadonly5489<T[P]>;
};

type UnionToIntersection5489<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5489<T> = UnionToIntersection5489<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5489<T extends unknown[], V> = [...T, V];

type TuplifyUnion5489<T, L = LastOf5489<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5489<TuplifyUnion5489<Exclude<T, L>>, L>;

type DeepPartial5489<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5489<T[P]> }
  : T;

type Paths5489<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5489<K, Paths5489<T[K], Prev5489[D]>> : never }[keyof T]
  : never;

type Prev5489 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5489<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5489 {
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

type ConfigPaths5489 = Paths5489<NestedConfig5489>;

interface HeavyProps5489 {
  config: DeepPartial5489<NestedConfig5489>;
  path?: ConfigPaths5489;
}

const HeavyComponent5489 = memo(function HeavyComponent5489({ config }: HeavyProps5489) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5489) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5489 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5489: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5489.displayName = 'HeavyComponent5489';
export default HeavyComponent5489;
