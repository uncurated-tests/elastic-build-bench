'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5561<T> = T extends (infer U)[]
  ? DeepReadonlyArray5561<U>
  : T extends object
  ? DeepReadonlyObject5561<T>
  : T;

interface DeepReadonlyArray5561<T> extends ReadonlyArray<DeepReadonly5561<T>> {}

type DeepReadonlyObject5561<T> = {
  readonly [P in keyof T]: DeepReadonly5561<T[P]>;
};

type UnionToIntersection5561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5561<T> = UnionToIntersection5561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5561<T extends unknown[], V> = [...T, V];

type TuplifyUnion5561<T, L = LastOf5561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5561<TuplifyUnion5561<Exclude<T, L>>, L>;

type DeepPartial5561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5561<T[P]> }
  : T;

type Paths5561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5561<K, Paths5561<T[K], Prev5561[D]>> : never }[keyof T]
  : never;

type Prev5561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5561 {
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

type ConfigPaths5561 = Paths5561<NestedConfig5561>;

interface HeavyProps5561 {
  config: DeepPartial5561<NestedConfig5561>;
  path?: ConfigPaths5561;
}

const HeavyComponent5561 = memo(function HeavyComponent5561({ config }: HeavyProps5561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5561.displayName = 'HeavyComponent5561';
export default HeavyComponent5561;
