'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5653<T> = T extends (infer U)[]
  ? DeepReadonlyArray5653<U>
  : T extends object
  ? DeepReadonlyObject5653<T>
  : T;

interface DeepReadonlyArray5653<T> extends ReadonlyArray<DeepReadonly5653<T>> {}

type DeepReadonlyObject5653<T> = {
  readonly [P in keyof T]: DeepReadonly5653<T[P]>;
};

type UnionToIntersection5653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5653<T> = UnionToIntersection5653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5653<T extends unknown[], V> = [...T, V];

type TuplifyUnion5653<T, L = LastOf5653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5653<TuplifyUnion5653<Exclude<T, L>>, L>;

type DeepPartial5653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5653<T[P]> }
  : T;

type Paths5653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5653<K, Paths5653<T[K], Prev5653[D]>> : never }[keyof T]
  : never;

type Prev5653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5653 {
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

type ConfigPaths5653 = Paths5653<NestedConfig5653>;

interface HeavyProps5653 {
  config: DeepPartial5653<NestedConfig5653>;
  path?: ConfigPaths5653;
}

const HeavyComponent5653 = memo(function HeavyComponent5653({ config }: HeavyProps5653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5653.displayName = 'HeavyComponent5653';
export default HeavyComponent5653;
