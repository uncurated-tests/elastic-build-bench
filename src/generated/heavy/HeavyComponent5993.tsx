'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5993<T> = T extends (infer U)[]
  ? DeepReadonlyArray5993<U>
  : T extends object
  ? DeepReadonlyObject5993<T>
  : T;

interface DeepReadonlyArray5993<T> extends ReadonlyArray<DeepReadonly5993<T>> {}

type DeepReadonlyObject5993<T> = {
  readonly [P in keyof T]: DeepReadonly5993<T[P]>;
};

type UnionToIntersection5993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5993<T> = UnionToIntersection5993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5993<T extends unknown[], V> = [...T, V];

type TuplifyUnion5993<T, L = LastOf5993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5993<TuplifyUnion5993<Exclude<T, L>>, L>;

type DeepPartial5993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5993<T[P]> }
  : T;

type Paths5993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5993<K, Paths5993<T[K], Prev5993[D]>> : never }[keyof T]
  : never;

type Prev5993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5993 {
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

type ConfigPaths5993 = Paths5993<NestedConfig5993>;

interface HeavyProps5993 {
  config: DeepPartial5993<NestedConfig5993>;
  path?: ConfigPaths5993;
}

const HeavyComponent5993 = memo(function HeavyComponent5993({ config }: HeavyProps5993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5993.displayName = 'HeavyComponent5993';
export default HeavyComponent5993;
