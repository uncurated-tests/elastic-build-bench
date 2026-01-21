'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5475<T> = T extends (infer U)[]
  ? DeepReadonlyArray5475<U>
  : T extends object
  ? DeepReadonlyObject5475<T>
  : T;

interface DeepReadonlyArray5475<T> extends ReadonlyArray<DeepReadonly5475<T>> {}

type DeepReadonlyObject5475<T> = {
  readonly [P in keyof T]: DeepReadonly5475<T[P]>;
};

type UnionToIntersection5475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5475<T> = UnionToIntersection5475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5475<T extends unknown[], V> = [...T, V];

type TuplifyUnion5475<T, L = LastOf5475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5475<TuplifyUnion5475<Exclude<T, L>>, L>;

type DeepPartial5475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5475<T[P]> }
  : T;

type Paths5475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5475<K, Paths5475<T[K], Prev5475[D]>> : never }[keyof T]
  : never;

type Prev5475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5475 {
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

type ConfigPaths5475 = Paths5475<NestedConfig5475>;

interface HeavyProps5475 {
  config: DeepPartial5475<NestedConfig5475>;
  path?: ConfigPaths5475;
}

const HeavyComponent5475 = memo(function HeavyComponent5475({ config }: HeavyProps5475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5475.displayName = 'HeavyComponent5475';
export default HeavyComponent5475;
