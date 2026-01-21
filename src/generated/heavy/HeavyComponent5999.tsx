'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5999<T> = T extends (infer U)[]
  ? DeepReadonlyArray5999<U>
  : T extends object
  ? DeepReadonlyObject5999<T>
  : T;

interface DeepReadonlyArray5999<T> extends ReadonlyArray<DeepReadonly5999<T>> {}

type DeepReadonlyObject5999<T> = {
  readonly [P in keyof T]: DeepReadonly5999<T[P]>;
};

type UnionToIntersection5999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5999<T> = UnionToIntersection5999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5999<T extends unknown[], V> = [...T, V];

type TuplifyUnion5999<T, L = LastOf5999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5999<TuplifyUnion5999<Exclude<T, L>>, L>;

type DeepPartial5999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5999<T[P]> }
  : T;

type Paths5999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5999<K, Paths5999<T[K], Prev5999[D]>> : never }[keyof T]
  : never;

type Prev5999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5999 {
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

type ConfigPaths5999 = Paths5999<NestedConfig5999>;

interface HeavyProps5999 {
  config: DeepPartial5999<NestedConfig5999>;
  path?: ConfigPaths5999;
}

const HeavyComponent5999 = memo(function HeavyComponent5999({ config }: HeavyProps5999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5999.displayName = 'HeavyComponent5999';
export default HeavyComponent5999;
