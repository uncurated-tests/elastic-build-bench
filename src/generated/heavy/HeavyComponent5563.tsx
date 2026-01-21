'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5563<T> = T extends (infer U)[]
  ? DeepReadonlyArray5563<U>
  : T extends object
  ? DeepReadonlyObject5563<T>
  : T;

interface DeepReadonlyArray5563<T> extends ReadonlyArray<DeepReadonly5563<T>> {}

type DeepReadonlyObject5563<T> = {
  readonly [P in keyof T]: DeepReadonly5563<T[P]>;
};

type UnionToIntersection5563<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5563<T> = UnionToIntersection5563<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5563<T extends unknown[], V> = [...T, V];

type TuplifyUnion5563<T, L = LastOf5563<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5563<TuplifyUnion5563<Exclude<T, L>>, L>;

type DeepPartial5563<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5563<T[P]> }
  : T;

type Paths5563<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5563<K, Paths5563<T[K], Prev5563[D]>> : never }[keyof T]
  : never;

type Prev5563 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5563<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5563 {
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

type ConfigPaths5563 = Paths5563<NestedConfig5563>;

interface HeavyProps5563 {
  config: DeepPartial5563<NestedConfig5563>;
  path?: ConfigPaths5563;
}

const HeavyComponent5563 = memo(function HeavyComponent5563({ config }: HeavyProps5563) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5563) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5563 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5563: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5563.displayName = 'HeavyComponent5563';
export default HeavyComponent5563;
