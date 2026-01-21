'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5307<T> = T extends (infer U)[]
  ? DeepReadonlyArray5307<U>
  : T extends object
  ? DeepReadonlyObject5307<T>
  : T;

interface DeepReadonlyArray5307<T> extends ReadonlyArray<DeepReadonly5307<T>> {}

type DeepReadonlyObject5307<T> = {
  readonly [P in keyof T]: DeepReadonly5307<T[P]>;
};

type UnionToIntersection5307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5307<T> = UnionToIntersection5307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5307<T extends unknown[], V> = [...T, V];

type TuplifyUnion5307<T, L = LastOf5307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5307<TuplifyUnion5307<Exclude<T, L>>, L>;

type DeepPartial5307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5307<T[P]> }
  : T;

type Paths5307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5307<K, Paths5307<T[K], Prev5307[D]>> : never }[keyof T]
  : never;

type Prev5307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5307 {
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

type ConfigPaths5307 = Paths5307<NestedConfig5307>;

interface HeavyProps5307 {
  config: DeepPartial5307<NestedConfig5307>;
  path?: ConfigPaths5307;
}

const HeavyComponent5307 = memo(function HeavyComponent5307({ config }: HeavyProps5307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5307.displayName = 'HeavyComponent5307';
export default HeavyComponent5307;
