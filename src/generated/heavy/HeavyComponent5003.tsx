'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5003<T> = T extends (infer U)[]
  ? DeepReadonlyArray5003<U>
  : T extends object
  ? DeepReadonlyObject5003<T>
  : T;

interface DeepReadonlyArray5003<T> extends ReadonlyArray<DeepReadonly5003<T>> {}

type DeepReadonlyObject5003<T> = {
  readonly [P in keyof T]: DeepReadonly5003<T[P]>;
};

type UnionToIntersection5003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5003<T> = UnionToIntersection5003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5003<T extends unknown[], V> = [...T, V];

type TuplifyUnion5003<T, L = LastOf5003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5003<TuplifyUnion5003<Exclude<T, L>>, L>;

type DeepPartial5003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5003<T[P]> }
  : T;

type Paths5003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5003<K, Paths5003<T[K], Prev5003[D]>> : never }[keyof T]
  : never;

type Prev5003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5003 {
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

type ConfigPaths5003 = Paths5003<NestedConfig5003>;

interface HeavyProps5003 {
  config: DeepPartial5003<NestedConfig5003>;
  path?: ConfigPaths5003;
}

const HeavyComponent5003 = memo(function HeavyComponent5003({ config }: HeavyProps5003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5003.displayName = 'HeavyComponent5003';
export default HeavyComponent5003;
