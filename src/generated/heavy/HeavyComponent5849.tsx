'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5849<T> = T extends (infer U)[]
  ? DeepReadonlyArray5849<U>
  : T extends object
  ? DeepReadonlyObject5849<T>
  : T;

interface DeepReadonlyArray5849<T> extends ReadonlyArray<DeepReadonly5849<T>> {}

type DeepReadonlyObject5849<T> = {
  readonly [P in keyof T]: DeepReadonly5849<T[P]>;
};

type UnionToIntersection5849<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5849<T> = UnionToIntersection5849<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5849<T extends unknown[], V> = [...T, V];

type TuplifyUnion5849<T, L = LastOf5849<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5849<TuplifyUnion5849<Exclude<T, L>>, L>;

type DeepPartial5849<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5849<T[P]> }
  : T;

type Paths5849<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5849<K, Paths5849<T[K], Prev5849[D]>> : never }[keyof T]
  : never;

type Prev5849 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5849<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5849 {
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

type ConfigPaths5849 = Paths5849<NestedConfig5849>;

interface HeavyProps5849 {
  config: DeepPartial5849<NestedConfig5849>;
  path?: ConfigPaths5849;
}

const HeavyComponent5849 = memo(function HeavyComponent5849({ config }: HeavyProps5849) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5849) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5849 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5849: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5849.displayName = 'HeavyComponent5849';
export default HeavyComponent5849;
