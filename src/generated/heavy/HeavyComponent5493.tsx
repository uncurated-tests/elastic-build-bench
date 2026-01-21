'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5493<T> = T extends (infer U)[]
  ? DeepReadonlyArray5493<U>
  : T extends object
  ? DeepReadonlyObject5493<T>
  : T;

interface DeepReadonlyArray5493<T> extends ReadonlyArray<DeepReadonly5493<T>> {}

type DeepReadonlyObject5493<T> = {
  readonly [P in keyof T]: DeepReadonly5493<T[P]>;
};

type UnionToIntersection5493<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5493<T> = UnionToIntersection5493<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5493<T extends unknown[], V> = [...T, V];

type TuplifyUnion5493<T, L = LastOf5493<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5493<TuplifyUnion5493<Exclude<T, L>>, L>;

type DeepPartial5493<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5493<T[P]> }
  : T;

type Paths5493<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5493<K, Paths5493<T[K], Prev5493[D]>> : never }[keyof T]
  : never;

type Prev5493 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5493<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5493 {
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

type ConfigPaths5493 = Paths5493<NestedConfig5493>;

interface HeavyProps5493 {
  config: DeepPartial5493<NestedConfig5493>;
  path?: ConfigPaths5493;
}

const HeavyComponent5493 = memo(function HeavyComponent5493({ config }: HeavyProps5493) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5493) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5493 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5493: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5493.displayName = 'HeavyComponent5493';
export default HeavyComponent5493;
