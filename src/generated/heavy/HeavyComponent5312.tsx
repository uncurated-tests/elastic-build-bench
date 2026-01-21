'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5312<T> = T extends (infer U)[]
  ? DeepReadonlyArray5312<U>
  : T extends object
  ? DeepReadonlyObject5312<T>
  : T;

interface DeepReadonlyArray5312<T> extends ReadonlyArray<DeepReadonly5312<T>> {}

type DeepReadonlyObject5312<T> = {
  readonly [P in keyof T]: DeepReadonly5312<T[P]>;
};

type UnionToIntersection5312<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5312<T> = UnionToIntersection5312<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5312<T extends unknown[], V> = [...T, V];

type TuplifyUnion5312<T, L = LastOf5312<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5312<TuplifyUnion5312<Exclude<T, L>>, L>;

type DeepPartial5312<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5312<T[P]> }
  : T;

type Paths5312<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5312<K, Paths5312<T[K], Prev5312[D]>> : never }[keyof T]
  : never;

type Prev5312 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5312<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5312 {
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

type ConfigPaths5312 = Paths5312<NestedConfig5312>;

interface HeavyProps5312 {
  config: DeepPartial5312<NestedConfig5312>;
  path?: ConfigPaths5312;
}

const HeavyComponent5312 = memo(function HeavyComponent5312({ config }: HeavyProps5312) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5312) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5312 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5312: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5312.displayName = 'HeavyComponent5312';
export default HeavyComponent5312;
