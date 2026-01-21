'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5138<T> = T extends (infer U)[]
  ? DeepReadonlyArray5138<U>
  : T extends object
  ? DeepReadonlyObject5138<T>
  : T;

interface DeepReadonlyArray5138<T> extends ReadonlyArray<DeepReadonly5138<T>> {}

type DeepReadonlyObject5138<T> = {
  readonly [P in keyof T]: DeepReadonly5138<T[P]>;
};

type UnionToIntersection5138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5138<T> = UnionToIntersection5138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5138<T extends unknown[], V> = [...T, V];

type TuplifyUnion5138<T, L = LastOf5138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5138<TuplifyUnion5138<Exclude<T, L>>, L>;

type DeepPartial5138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5138<T[P]> }
  : T;

type Paths5138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5138<K, Paths5138<T[K], Prev5138[D]>> : never }[keyof T]
  : never;

type Prev5138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5138 {
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

type ConfigPaths5138 = Paths5138<NestedConfig5138>;

interface HeavyProps5138 {
  config: DeepPartial5138<NestedConfig5138>;
  path?: ConfigPaths5138;
}

const HeavyComponent5138 = memo(function HeavyComponent5138({ config }: HeavyProps5138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5138.displayName = 'HeavyComponent5138';
export default HeavyComponent5138;
