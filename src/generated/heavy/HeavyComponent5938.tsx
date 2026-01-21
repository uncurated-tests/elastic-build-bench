'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5938<T> = T extends (infer U)[]
  ? DeepReadonlyArray5938<U>
  : T extends object
  ? DeepReadonlyObject5938<T>
  : T;

interface DeepReadonlyArray5938<T> extends ReadonlyArray<DeepReadonly5938<T>> {}

type DeepReadonlyObject5938<T> = {
  readonly [P in keyof T]: DeepReadonly5938<T[P]>;
};

type UnionToIntersection5938<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5938<T> = UnionToIntersection5938<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5938<T extends unknown[], V> = [...T, V];

type TuplifyUnion5938<T, L = LastOf5938<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5938<TuplifyUnion5938<Exclude<T, L>>, L>;

type DeepPartial5938<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5938<T[P]> }
  : T;

type Paths5938<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5938<K, Paths5938<T[K], Prev5938[D]>> : never }[keyof T]
  : never;

type Prev5938 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5938<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5938 {
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

type ConfigPaths5938 = Paths5938<NestedConfig5938>;

interface HeavyProps5938 {
  config: DeepPartial5938<NestedConfig5938>;
  path?: ConfigPaths5938;
}

const HeavyComponent5938 = memo(function HeavyComponent5938({ config }: HeavyProps5938) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5938) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5938 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5938: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5938.displayName = 'HeavyComponent5938';
export default HeavyComponent5938;
