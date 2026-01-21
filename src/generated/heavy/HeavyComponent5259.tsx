'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5259<T> = T extends (infer U)[]
  ? DeepReadonlyArray5259<U>
  : T extends object
  ? DeepReadonlyObject5259<T>
  : T;

interface DeepReadonlyArray5259<T> extends ReadonlyArray<DeepReadonly5259<T>> {}

type DeepReadonlyObject5259<T> = {
  readonly [P in keyof T]: DeepReadonly5259<T[P]>;
};

type UnionToIntersection5259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5259<T> = UnionToIntersection5259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5259<T extends unknown[], V> = [...T, V];

type TuplifyUnion5259<T, L = LastOf5259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5259<TuplifyUnion5259<Exclude<T, L>>, L>;

type DeepPartial5259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5259<T[P]> }
  : T;

type Paths5259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5259<K, Paths5259<T[K], Prev5259[D]>> : never }[keyof T]
  : never;

type Prev5259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5259 {
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

type ConfigPaths5259 = Paths5259<NestedConfig5259>;

interface HeavyProps5259 {
  config: DeepPartial5259<NestedConfig5259>;
  path?: ConfigPaths5259;
}

const HeavyComponent5259 = memo(function HeavyComponent5259({ config }: HeavyProps5259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5259.displayName = 'HeavyComponent5259';
export default HeavyComponent5259;
