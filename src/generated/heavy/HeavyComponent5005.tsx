'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5005<T> = T extends (infer U)[]
  ? DeepReadonlyArray5005<U>
  : T extends object
  ? DeepReadonlyObject5005<T>
  : T;

interface DeepReadonlyArray5005<T> extends ReadonlyArray<DeepReadonly5005<T>> {}

type DeepReadonlyObject5005<T> = {
  readonly [P in keyof T]: DeepReadonly5005<T[P]>;
};

type UnionToIntersection5005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5005<T> = UnionToIntersection5005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5005<T extends unknown[], V> = [...T, V];

type TuplifyUnion5005<T, L = LastOf5005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5005<TuplifyUnion5005<Exclude<T, L>>, L>;

type DeepPartial5005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5005<T[P]> }
  : T;

type Paths5005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5005<K, Paths5005<T[K], Prev5005[D]>> : never }[keyof T]
  : never;

type Prev5005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5005 {
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

type ConfigPaths5005 = Paths5005<NestedConfig5005>;

interface HeavyProps5005 {
  config: DeepPartial5005<NestedConfig5005>;
  path?: ConfigPaths5005;
}

const HeavyComponent5005 = memo(function HeavyComponent5005({ config }: HeavyProps5005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5005.displayName = 'HeavyComponent5005';
export default HeavyComponent5005;
