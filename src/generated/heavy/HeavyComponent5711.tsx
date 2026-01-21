'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5711<T> = T extends (infer U)[]
  ? DeepReadonlyArray5711<U>
  : T extends object
  ? DeepReadonlyObject5711<T>
  : T;

interface DeepReadonlyArray5711<T> extends ReadonlyArray<DeepReadonly5711<T>> {}

type DeepReadonlyObject5711<T> = {
  readonly [P in keyof T]: DeepReadonly5711<T[P]>;
};

type UnionToIntersection5711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5711<T> = UnionToIntersection5711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5711<T extends unknown[], V> = [...T, V];

type TuplifyUnion5711<T, L = LastOf5711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5711<TuplifyUnion5711<Exclude<T, L>>, L>;

type DeepPartial5711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5711<T[P]> }
  : T;

type Paths5711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5711<K, Paths5711<T[K], Prev5711[D]>> : never }[keyof T]
  : never;

type Prev5711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5711 {
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

type ConfigPaths5711 = Paths5711<NestedConfig5711>;

interface HeavyProps5711 {
  config: DeepPartial5711<NestedConfig5711>;
  path?: ConfigPaths5711;
}

const HeavyComponent5711 = memo(function HeavyComponent5711({ config }: HeavyProps5711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5711.displayName = 'HeavyComponent5711';
export default HeavyComponent5711;
