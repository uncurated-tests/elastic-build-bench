'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5873<T> = T extends (infer U)[]
  ? DeepReadonlyArray5873<U>
  : T extends object
  ? DeepReadonlyObject5873<T>
  : T;

interface DeepReadonlyArray5873<T> extends ReadonlyArray<DeepReadonly5873<T>> {}

type DeepReadonlyObject5873<T> = {
  readonly [P in keyof T]: DeepReadonly5873<T[P]>;
};

type UnionToIntersection5873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5873<T> = UnionToIntersection5873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5873<T extends unknown[], V> = [...T, V];

type TuplifyUnion5873<T, L = LastOf5873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5873<TuplifyUnion5873<Exclude<T, L>>, L>;

type DeepPartial5873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5873<T[P]> }
  : T;

type Paths5873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5873<K, Paths5873<T[K], Prev5873[D]>> : never }[keyof T]
  : never;

type Prev5873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5873 {
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

type ConfigPaths5873 = Paths5873<NestedConfig5873>;

interface HeavyProps5873 {
  config: DeepPartial5873<NestedConfig5873>;
  path?: ConfigPaths5873;
}

const HeavyComponent5873 = memo(function HeavyComponent5873({ config }: HeavyProps5873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5873.displayName = 'HeavyComponent5873';
export default HeavyComponent5873;
