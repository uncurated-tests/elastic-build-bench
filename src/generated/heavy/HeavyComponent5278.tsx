'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5278<T> = T extends (infer U)[]
  ? DeepReadonlyArray5278<U>
  : T extends object
  ? DeepReadonlyObject5278<T>
  : T;

interface DeepReadonlyArray5278<T> extends ReadonlyArray<DeepReadonly5278<T>> {}

type DeepReadonlyObject5278<T> = {
  readonly [P in keyof T]: DeepReadonly5278<T[P]>;
};

type UnionToIntersection5278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5278<T> = UnionToIntersection5278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5278<T extends unknown[], V> = [...T, V];

type TuplifyUnion5278<T, L = LastOf5278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5278<TuplifyUnion5278<Exclude<T, L>>, L>;

type DeepPartial5278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5278<T[P]> }
  : T;

type Paths5278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5278<K, Paths5278<T[K], Prev5278[D]>> : never }[keyof T]
  : never;

type Prev5278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5278 {
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

type ConfigPaths5278 = Paths5278<NestedConfig5278>;

interface HeavyProps5278 {
  config: DeepPartial5278<NestedConfig5278>;
  path?: ConfigPaths5278;
}

const HeavyComponent5278 = memo(function HeavyComponent5278({ config }: HeavyProps5278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5278.displayName = 'HeavyComponent5278';
export default HeavyComponent5278;
