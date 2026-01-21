'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5706<T> = T extends (infer U)[]
  ? DeepReadonlyArray5706<U>
  : T extends object
  ? DeepReadonlyObject5706<T>
  : T;

interface DeepReadonlyArray5706<T> extends ReadonlyArray<DeepReadonly5706<T>> {}

type DeepReadonlyObject5706<T> = {
  readonly [P in keyof T]: DeepReadonly5706<T[P]>;
};

type UnionToIntersection5706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5706<T> = UnionToIntersection5706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5706<T extends unknown[], V> = [...T, V];

type TuplifyUnion5706<T, L = LastOf5706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5706<TuplifyUnion5706<Exclude<T, L>>, L>;

type DeepPartial5706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5706<T[P]> }
  : T;

type Paths5706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5706<K, Paths5706<T[K], Prev5706[D]>> : never }[keyof T]
  : never;

type Prev5706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5706 {
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

type ConfigPaths5706 = Paths5706<NestedConfig5706>;

interface HeavyProps5706 {
  config: DeepPartial5706<NestedConfig5706>;
  path?: ConfigPaths5706;
}

const HeavyComponent5706 = memo(function HeavyComponent5706({ config }: HeavyProps5706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5706.displayName = 'HeavyComponent5706';
export default HeavyComponent5706;
