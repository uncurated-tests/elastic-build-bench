'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5646<T> = T extends (infer U)[]
  ? DeepReadonlyArray5646<U>
  : T extends object
  ? DeepReadonlyObject5646<T>
  : T;

interface DeepReadonlyArray5646<T> extends ReadonlyArray<DeepReadonly5646<T>> {}

type DeepReadonlyObject5646<T> = {
  readonly [P in keyof T]: DeepReadonly5646<T[P]>;
};

type UnionToIntersection5646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5646<T> = UnionToIntersection5646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5646<T extends unknown[], V> = [...T, V];

type TuplifyUnion5646<T, L = LastOf5646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5646<TuplifyUnion5646<Exclude<T, L>>, L>;

type DeepPartial5646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5646<T[P]> }
  : T;

type Paths5646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5646<K, Paths5646<T[K], Prev5646[D]>> : never }[keyof T]
  : never;

type Prev5646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5646 {
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

type ConfigPaths5646 = Paths5646<NestedConfig5646>;

interface HeavyProps5646 {
  config: DeepPartial5646<NestedConfig5646>;
  path?: ConfigPaths5646;
}

const HeavyComponent5646 = memo(function HeavyComponent5646({ config }: HeavyProps5646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5646.displayName = 'HeavyComponent5646';
export default HeavyComponent5646;
