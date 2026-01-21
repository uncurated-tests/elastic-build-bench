'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5088<T> = T extends (infer U)[]
  ? DeepReadonlyArray5088<U>
  : T extends object
  ? DeepReadonlyObject5088<T>
  : T;

interface DeepReadonlyArray5088<T> extends ReadonlyArray<DeepReadonly5088<T>> {}

type DeepReadonlyObject5088<T> = {
  readonly [P in keyof T]: DeepReadonly5088<T[P]>;
};

type UnionToIntersection5088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5088<T> = UnionToIntersection5088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5088<T extends unknown[], V> = [...T, V];

type TuplifyUnion5088<T, L = LastOf5088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5088<TuplifyUnion5088<Exclude<T, L>>, L>;

type DeepPartial5088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5088<T[P]> }
  : T;

type Paths5088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5088<K, Paths5088<T[K], Prev5088[D]>> : never }[keyof T]
  : never;

type Prev5088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5088 {
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

type ConfigPaths5088 = Paths5088<NestedConfig5088>;

interface HeavyProps5088 {
  config: DeepPartial5088<NestedConfig5088>;
  path?: ConfigPaths5088;
}

const HeavyComponent5088 = memo(function HeavyComponent5088({ config }: HeavyProps5088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5088.displayName = 'HeavyComponent5088';
export default HeavyComponent5088;
