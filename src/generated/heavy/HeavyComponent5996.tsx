'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5996<T> = T extends (infer U)[]
  ? DeepReadonlyArray5996<U>
  : T extends object
  ? DeepReadonlyObject5996<T>
  : T;

interface DeepReadonlyArray5996<T> extends ReadonlyArray<DeepReadonly5996<T>> {}

type DeepReadonlyObject5996<T> = {
  readonly [P in keyof T]: DeepReadonly5996<T[P]>;
};

type UnionToIntersection5996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5996<T> = UnionToIntersection5996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5996<T extends unknown[], V> = [...T, V];

type TuplifyUnion5996<T, L = LastOf5996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5996<TuplifyUnion5996<Exclude<T, L>>, L>;

type DeepPartial5996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5996<T[P]> }
  : T;

type Paths5996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5996<K, Paths5996<T[K], Prev5996[D]>> : never }[keyof T]
  : never;

type Prev5996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5996 {
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

type ConfigPaths5996 = Paths5996<NestedConfig5996>;

interface HeavyProps5996 {
  config: DeepPartial5996<NestedConfig5996>;
  path?: ConfigPaths5996;
}

const HeavyComponent5996 = memo(function HeavyComponent5996({ config }: HeavyProps5996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5996.displayName = 'HeavyComponent5996';
export default HeavyComponent5996;
