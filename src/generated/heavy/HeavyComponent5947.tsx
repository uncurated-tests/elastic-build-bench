'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5947<T> = T extends (infer U)[]
  ? DeepReadonlyArray5947<U>
  : T extends object
  ? DeepReadonlyObject5947<T>
  : T;

interface DeepReadonlyArray5947<T> extends ReadonlyArray<DeepReadonly5947<T>> {}

type DeepReadonlyObject5947<T> = {
  readonly [P in keyof T]: DeepReadonly5947<T[P]>;
};

type UnionToIntersection5947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5947<T> = UnionToIntersection5947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5947<T extends unknown[], V> = [...T, V];

type TuplifyUnion5947<T, L = LastOf5947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5947<TuplifyUnion5947<Exclude<T, L>>, L>;

type DeepPartial5947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5947<T[P]> }
  : T;

type Paths5947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5947<K, Paths5947<T[K], Prev5947[D]>> : never }[keyof T]
  : never;

type Prev5947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5947 {
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

type ConfigPaths5947 = Paths5947<NestedConfig5947>;

interface HeavyProps5947 {
  config: DeepPartial5947<NestedConfig5947>;
  path?: ConfigPaths5947;
}

const HeavyComponent5947 = memo(function HeavyComponent5947({ config }: HeavyProps5947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5947.displayName = 'HeavyComponent5947';
export default HeavyComponent5947;
