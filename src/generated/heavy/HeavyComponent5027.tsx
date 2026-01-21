'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5027<T> = T extends (infer U)[]
  ? DeepReadonlyArray5027<U>
  : T extends object
  ? DeepReadonlyObject5027<T>
  : T;

interface DeepReadonlyArray5027<T> extends ReadonlyArray<DeepReadonly5027<T>> {}

type DeepReadonlyObject5027<T> = {
  readonly [P in keyof T]: DeepReadonly5027<T[P]>;
};

type UnionToIntersection5027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5027<T> = UnionToIntersection5027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5027<T extends unknown[], V> = [...T, V];

type TuplifyUnion5027<T, L = LastOf5027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5027<TuplifyUnion5027<Exclude<T, L>>, L>;

type DeepPartial5027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5027<T[P]> }
  : T;

type Paths5027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5027<K, Paths5027<T[K], Prev5027[D]>> : never }[keyof T]
  : never;

type Prev5027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5027 {
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

type ConfigPaths5027 = Paths5027<NestedConfig5027>;

interface HeavyProps5027 {
  config: DeepPartial5027<NestedConfig5027>;
  path?: ConfigPaths5027;
}

const HeavyComponent5027 = memo(function HeavyComponent5027({ config }: HeavyProps5027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5027.displayName = 'HeavyComponent5027';
export default HeavyComponent5027;
