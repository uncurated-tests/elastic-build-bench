'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5773<T> = T extends (infer U)[]
  ? DeepReadonlyArray5773<U>
  : T extends object
  ? DeepReadonlyObject5773<T>
  : T;

interface DeepReadonlyArray5773<T> extends ReadonlyArray<DeepReadonly5773<T>> {}

type DeepReadonlyObject5773<T> = {
  readonly [P in keyof T]: DeepReadonly5773<T[P]>;
};

type UnionToIntersection5773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5773<T> = UnionToIntersection5773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5773<T extends unknown[], V> = [...T, V];

type TuplifyUnion5773<T, L = LastOf5773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5773<TuplifyUnion5773<Exclude<T, L>>, L>;

type DeepPartial5773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5773<T[P]> }
  : T;

type Paths5773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5773<K, Paths5773<T[K], Prev5773[D]>> : never }[keyof T]
  : never;

type Prev5773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5773 {
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

type ConfigPaths5773 = Paths5773<NestedConfig5773>;

interface HeavyProps5773 {
  config: DeepPartial5773<NestedConfig5773>;
  path?: ConfigPaths5773;
}

const HeavyComponent5773 = memo(function HeavyComponent5773({ config }: HeavyProps5773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5773.displayName = 'HeavyComponent5773';
export default HeavyComponent5773;
