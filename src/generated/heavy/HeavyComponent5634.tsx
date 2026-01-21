'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5634<T> = T extends (infer U)[]
  ? DeepReadonlyArray5634<U>
  : T extends object
  ? DeepReadonlyObject5634<T>
  : T;

interface DeepReadonlyArray5634<T> extends ReadonlyArray<DeepReadonly5634<T>> {}

type DeepReadonlyObject5634<T> = {
  readonly [P in keyof T]: DeepReadonly5634<T[P]>;
};

type UnionToIntersection5634<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5634<T> = UnionToIntersection5634<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5634<T extends unknown[], V> = [...T, V];

type TuplifyUnion5634<T, L = LastOf5634<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5634<TuplifyUnion5634<Exclude<T, L>>, L>;

type DeepPartial5634<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5634<T[P]> }
  : T;

type Paths5634<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5634<K, Paths5634<T[K], Prev5634[D]>> : never }[keyof T]
  : never;

type Prev5634 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5634<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5634 {
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

type ConfigPaths5634 = Paths5634<NestedConfig5634>;

interface HeavyProps5634 {
  config: DeepPartial5634<NestedConfig5634>;
  path?: ConfigPaths5634;
}

const HeavyComponent5634 = memo(function HeavyComponent5634({ config }: HeavyProps5634) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5634) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5634 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5634: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5634.displayName = 'HeavyComponent5634';
export default HeavyComponent5634;
