'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5998<T> = T extends (infer U)[]
  ? DeepReadonlyArray5998<U>
  : T extends object
  ? DeepReadonlyObject5998<T>
  : T;

interface DeepReadonlyArray5998<T> extends ReadonlyArray<DeepReadonly5998<T>> {}

type DeepReadonlyObject5998<T> = {
  readonly [P in keyof T]: DeepReadonly5998<T[P]>;
};

type UnionToIntersection5998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5998<T> = UnionToIntersection5998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5998<T extends unknown[], V> = [...T, V];

type TuplifyUnion5998<T, L = LastOf5998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5998<TuplifyUnion5998<Exclude<T, L>>, L>;

type DeepPartial5998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5998<T[P]> }
  : T;

type Paths5998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5998<K, Paths5998<T[K], Prev5998[D]>> : never }[keyof T]
  : never;

type Prev5998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5998 {
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

type ConfigPaths5998 = Paths5998<NestedConfig5998>;

interface HeavyProps5998 {
  config: DeepPartial5998<NestedConfig5998>;
  path?: ConfigPaths5998;
}

const HeavyComponent5998 = memo(function HeavyComponent5998({ config }: HeavyProps5998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5998.displayName = 'HeavyComponent5998';
export default HeavyComponent5998;
