'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5718<T> = T extends (infer U)[]
  ? DeepReadonlyArray5718<U>
  : T extends object
  ? DeepReadonlyObject5718<T>
  : T;

interface DeepReadonlyArray5718<T> extends ReadonlyArray<DeepReadonly5718<T>> {}

type DeepReadonlyObject5718<T> = {
  readonly [P in keyof T]: DeepReadonly5718<T[P]>;
};

type UnionToIntersection5718<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5718<T> = UnionToIntersection5718<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5718<T extends unknown[], V> = [...T, V];

type TuplifyUnion5718<T, L = LastOf5718<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5718<TuplifyUnion5718<Exclude<T, L>>, L>;

type DeepPartial5718<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5718<T[P]> }
  : T;

type Paths5718<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5718<K, Paths5718<T[K], Prev5718[D]>> : never }[keyof T]
  : never;

type Prev5718 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5718<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5718 {
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

type ConfigPaths5718 = Paths5718<NestedConfig5718>;

interface HeavyProps5718 {
  config: DeepPartial5718<NestedConfig5718>;
  path?: ConfigPaths5718;
}

const HeavyComponent5718 = memo(function HeavyComponent5718({ config }: HeavyProps5718) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5718) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5718 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5718: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5718.displayName = 'HeavyComponent5718';
export default HeavyComponent5718;
