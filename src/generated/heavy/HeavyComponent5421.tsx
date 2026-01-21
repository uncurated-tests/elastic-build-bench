'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5421<T> = T extends (infer U)[]
  ? DeepReadonlyArray5421<U>
  : T extends object
  ? DeepReadonlyObject5421<T>
  : T;

interface DeepReadonlyArray5421<T> extends ReadonlyArray<DeepReadonly5421<T>> {}

type DeepReadonlyObject5421<T> = {
  readonly [P in keyof T]: DeepReadonly5421<T[P]>;
};

type UnionToIntersection5421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5421<T> = UnionToIntersection5421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5421<T extends unknown[], V> = [...T, V];

type TuplifyUnion5421<T, L = LastOf5421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5421<TuplifyUnion5421<Exclude<T, L>>, L>;

type DeepPartial5421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5421<T[P]> }
  : T;

type Paths5421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5421<K, Paths5421<T[K], Prev5421[D]>> : never }[keyof T]
  : never;

type Prev5421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5421 {
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

type ConfigPaths5421 = Paths5421<NestedConfig5421>;

interface HeavyProps5421 {
  config: DeepPartial5421<NestedConfig5421>;
  path?: ConfigPaths5421;
}

const HeavyComponent5421 = memo(function HeavyComponent5421({ config }: HeavyProps5421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5421.displayName = 'HeavyComponent5421';
export default HeavyComponent5421;
