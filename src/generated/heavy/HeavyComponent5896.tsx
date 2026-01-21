'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5896<T> = T extends (infer U)[]
  ? DeepReadonlyArray5896<U>
  : T extends object
  ? DeepReadonlyObject5896<T>
  : T;

interface DeepReadonlyArray5896<T> extends ReadonlyArray<DeepReadonly5896<T>> {}

type DeepReadonlyObject5896<T> = {
  readonly [P in keyof T]: DeepReadonly5896<T[P]>;
};

type UnionToIntersection5896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5896<T> = UnionToIntersection5896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5896<T extends unknown[], V> = [...T, V];

type TuplifyUnion5896<T, L = LastOf5896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5896<TuplifyUnion5896<Exclude<T, L>>, L>;

type DeepPartial5896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5896<T[P]> }
  : T;

type Paths5896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5896<K, Paths5896<T[K], Prev5896[D]>> : never }[keyof T]
  : never;

type Prev5896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5896 {
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

type ConfigPaths5896 = Paths5896<NestedConfig5896>;

interface HeavyProps5896 {
  config: DeepPartial5896<NestedConfig5896>;
  path?: ConfigPaths5896;
}

const HeavyComponent5896 = memo(function HeavyComponent5896({ config }: HeavyProps5896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5896.displayName = 'HeavyComponent5896';
export default HeavyComponent5896;
