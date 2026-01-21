'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5011<T> = T extends (infer U)[]
  ? DeepReadonlyArray5011<U>
  : T extends object
  ? DeepReadonlyObject5011<T>
  : T;

interface DeepReadonlyArray5011<T> extends ReadonlyArray<DeepReadonly5011<T>> {}

type DeepReadonlyObject5011<T> = {
  readonly [P in keyof T]: DeepReadonly5011<T[P]>;
};

type UnionToIntersection5011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5011<T> = UnionToIntersection5011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5011<T extends unknown[], V> = [...T, V];

type TuplifyUnion5011<T, L = LastOf5011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5011<TuplifyUnion5011<Exclude<T, L>>, L>;

type DeepPartial5011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5011<T[P]> }
  : T;

type Paths5011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5011<K, Paths5011<T[K], Prev5011[D]>> : never }[keyof T]
  : never;

type Prev5011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5011 {
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

type ConfigPaths5011 = Paths5011<NestedConfig5011>;

interface HeavyProps5011 {
  config: DeepPartial5011<NestedConfig5011>;
  path?: ConfigPaths5011;
}

const HeavyComponent5011 = memo(function HeavyComponent5011({ config }: HeavyProps5011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5011.displayName = 'HeavyComponent5011';
export default HeavyComponent5011;
