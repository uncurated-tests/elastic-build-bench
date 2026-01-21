'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5322<T> = T extends (infer U)[]
  ? DeepReadonlyArray5322<U>
  : T extends object
  ? DeepReadonlyObject5322<T>
  : T;

interface DeepReadonlyArray5322<T> extends ReadonlyArray<DeepReadonly5322<T>> {}

type DeepReadonlyObject5322<T> = {
  readonly [P in keyof T]: DeepReadonly5322<T[P]>;
};

type UnionToIntersection5322<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5322<T> = UnionToIntersection5322<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5322<T extends unknown[], V> = [...T, V];

type TuplifyUnion5322<T, L = LastOf5322<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5322<TuplifyUnion5322<Exclude<T, L>>, L>;

type DeepPartial5322<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5322<T[P]> }
  : T;

type Paths5322<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5322<K, Paths5322<T[K], Prev5322[D]>> : never }[keyof T]
  : never;

type Prev5322 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5322<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5322 {
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

type ConfigPaths5322 = Paths5322<NestedConfig5322>;

interface HeavyProps5322 {
  config: DeepPartial5322<NestedConfig5322>;
  path?: ConfigPaths5322;
}

const HeavyComponent5322 = memo(function HeavyComponent5322({ config }: HeavyProps5322) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5322) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5322 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5322: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5322.displayName = 'HeavyComponent5322';
export default HeavyComponent5322;
