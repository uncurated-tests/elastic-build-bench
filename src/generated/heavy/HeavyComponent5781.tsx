'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5781<T> = T extends (infer U)[]
  ? DeepReadonlyArray5781<U>
  : T extends object
  ? DeepReadonlyObject5781<T>
  : T;

interface DeepReadonlyArray5781<T> extends ReadonlyArray<DeepReadonly5781<T>> {}

type DeepReadonlyObject5781<T> = {
  readonly [P in keyof T]: DeepReadonly5781<T[P]>;
};

type UnionToIntersection5781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5781<T> = UnionToIntersection5781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5781<T extends unknown[], V> = [...T, V];

type TuplifyUnion5781<T, L = LastOf5781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5781<TuplifyUnion5781<Exclude<T, L>>, L>;

type DeepPartial5781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5781<T[P]> }
  : T;

type Paths5781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5781<K, Paths5781<T[K], Prev5781[D]>> : never }[keyof T]
  : never;

type Prev5781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5781 {
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

type ConfigPaths5781 = Paths5781<NestedConfig5781>;

interface HeavyProps5781 {
  config: DeepPartial5781<NestedConfig5781>;
  path?: ConfigPaths5781;
}

const HeavyComponent5781 = memo(function HeavyComponent5781({ config }: HeavyProps5781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5781.displayName = 'HeavyComponent5781';
export default HeavyComponent5781;
