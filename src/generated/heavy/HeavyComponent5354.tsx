'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5354<T> = T extends (infer U)[]
  ? DeepReadonlyArray5354<U>
  : T extends object
  ? DeepReadonlyObject5354<T>
  : T;

interface DeepReadonlyArray5354<T> extends ReadonlyArray<DeepReadonly5354<T>> {}

type DeepReadonlyObject5354<T> = {
  readonly [P in keyof T]: DeepReadonly5354<T[P]>;
};

type UnionToIntersection5354<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5354<T> = UnionToIntersection5354<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5354<T extends unknown[], V> = [...T, V];

type TuplifyUnion5354<T, L = LastOf5354<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5354<TuplifyUnion5354<Exclude<T, L>>, L>;

type DeepPartial5354<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5354<T[P]> }
  : T;

type Paths5354<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5354<K, Paths5354<T[K], Prev5354[D]>> : never }[keyof T]
  : never;

type Prev5354 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5354<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5354 {
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

type ConfigPaths5354 = Paths5354<NestedConfig5354>;

interface HeavyProps5354 {
  config: DeepPartial5354<NestedConfig5354>;
  path?: ConfigPaths5354;
}

const HeavyComponent5354 = memo(function HeavyComponent5354({ config }: HeavyProps5354) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5354) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5354 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5354: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5354.displayName = 'HeavyComponent5354';
export default HeavyComponent5354;
