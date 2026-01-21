'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5746<T> = T extends (infer U)[]
  ? DeepReadonlyArray5746<U>
  : T extends object
  ? DeepReadonlyObject5746<T>
  : T;

interface DeepReadonlyArray5746<T> extends ReadonlyArray<DeepReadonly5746<T>> {}

type DeepReadonlyObject5746<T> = {
  readonly [P in keyof T]: DeepReadonly5746<T[P]>;
};

type UnionToIntersection5746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5746<T> = UnionToIntersection5746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5746<T extends unknown[], V> = [...T, V];

type TuplifyUnion5746<T, L = LastOf5746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5746<TuplifyUnion5746<Exclude<T, L>>, L>;

type DeepPartial5746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5746<T[P]> }
  : T;

type Paths5746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5746<K, Paths5746<T[K], Prev5746[D]>> : never }[keyof T]
  : never;

type Prev5746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5746 {
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

type ConfigPaths5746 = Paths5746<NestedConfig5746>;

interface HeavyProps5746 {
  config: DeepPartial5746<NestedConfig5746>;
  path?: ConfigPaths5746;
}

const HeavyComponent5746 = memo(function HeavyComponent5746({ config }: HeavyProps5746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5746.displayName = 'HeavyComponent5746';
export default HeavyComponent5746;
