'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5970<T> = T extends (infer U)[]
  ? DeepReadonlyArray5970<U>
  : T extends object
  ? DeepReadonlyObject5970<T>
  : T;

interface DeepReadonlyArray5970<T> extends ReadonlyArray<DeepReadonly5970<T>> {}

type DeepReadonlyObject5970<T> = {
  readonly [P in keyof T]: DeepReadonly5970<T[P]>;
};

type UnionToIntersection5970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5970<T> = UnionToIntersection5970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5970<T extends unknown[], V> = [...T, V];

type TuplifyUnion5970<T, L = LastOf5970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5970<TuplifyUnion5970<Exclude<T, L>>, L>;

type DeepPartial5970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5970<T[P]> }
  : T;

type Paths5970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5970<K, Paths5970<T[K], Prev5970[D]>> : never }[keyof T]
  : never;

type Prev5970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5970 {
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

type ConfigPaths5970 = Paths5970<NestedConfig5970>;

interface HeavyProps5970 {
  config: DeepPartial5970<NestedConfig5970>;
  path?: ConfigPaths5970;
}

const HeavyComponent5970 = memo(function HeavyComponent5970({ config }: HeavyProps5970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5970.displayName = 'HeavyComponent5970';
export default HeavyComponent5970;
