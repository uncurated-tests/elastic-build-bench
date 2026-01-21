'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5073<T> = T extends (infer U)[]
  ? DeepReadonlyArray5073<U>
  : T extends object
  ? DeepReadonlyObject5073<T>
  : T;

interface DeepReadonlyArray5073<T> extends ReadonlyArray<DeepReadonly5073<T>> {}

type DeepReadonlyObject5073<T> = {
  readonly [P in keyof T]: DeepReadonly5073<T[P]>;
};

type UnionToIntersection5073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5073<T> = UnionToIntersection5073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5073<T extends unknown[], V> = [...T, V];

type TuplifyUnion5073<T, L = LastOf5073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5073<TuplifyUnion5073<Exclude<T, L>>, L>;

type DeepPartial5073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5073<T[P]> }
  : T;

type Paths5073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5073<K, Paths5073<T[K], Prev5073[D]>> : never }[keyof T]
  : never;

type Prev5073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5073 {
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

type ConfigPaths5073 = Paths5073<NestedConfig5073>;

interface HeavyProps5073 {
  config: DeepPartial5073<NestedConfig5073>;
  path?: ConfigPaths5073;
}

const HeavyComponent5073 = memo(function HeavyComponent5073({ config }: HeavyProps5073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5073.displayName = 'HeavyComponent5073';
export default HeavyComponent5073;
