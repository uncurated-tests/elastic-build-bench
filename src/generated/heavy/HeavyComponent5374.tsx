'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5374<T> = T extends (infer U)[]
  ? DeepReadonlyArray5374<U>
  : T extends object
  ? DeepReadonlyObject5374<T>
  : T;

interface DeepReadonlyArray5374<T> extends ReadonlyArray<DeepReadonly5374<T>> {}

type DeepReadonlyObject5374<T> = {
  readonly [P in keyof T]: DeepReadonly5374<T[P]>;
};

type UnionToIntersection5374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5374<T> = UnionToIntersection5374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5374<T extends unknown[], V> = [...T, V];

type TuplifyUnion5374<T, L = LastOf5374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5374<TuplifyUnion5374<Exclude<T, L>>, L>;

type DeepPartial5374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5374<T[P]> }
  : T;

type Paths5374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5374<K, Paths5374<T[K], Prev5374[D]>> : never }[keyof T]
  : never;

type Prev5374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5374 {
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

type ConfigPaths5374 = Paths5374<NestedConfig5374>;

interface HeavyProps5374 {
  config: DeepPartial5374<NestedConfig5374>;
  path?: ConfigPaths5374;
}

const HeavyComponent5374 = memo(function HeavyComponent5374({ config }: HeavyProps5374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5374.displayName = 'HeavyComponent5374';
export default HeavyComponent5374;
