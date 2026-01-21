'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5492<T> = T extends (infer U)[]
  ? DeepReadonlyArray5492<U>
  : T extends object
  ? DeepReadonlyObject5492<T>
  : T;

interface DeepReadonlyArray5492<T> extends ReadonlyArray<DeepReadonly5492<T>> {}

type DeepReadonlyObject5492<T> = {
  readonly [P in keyof T]: DeepReadonly5492<T[P]>;
};

type UnionToIntersection5492<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5492<T> = UnionToIntersection5492<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5492<T extends unknown[], V> = [...T, V];

type TuplifyUnion5492<T, L = LastOf5492<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5492<TuplifyUnion5492<Exclude<T, L>>, L>;

type DeepPartial5492<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5492<T[P]> }
  : T;

type Paths5492<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5492<K, Paths5492<T[K], Prev5492[D]>> : never }[keyof T]
  : never;

type Prev5492 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5492<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5492 {
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

type ConfigPaths5492 = Paths5492<NestedConfig5492>;

interface HeavyProps5492 {
  config: DeepPartial5492<NestedConfig5492>;
  path?: ConfigPaths5492;
}

const HeavyComponent5492 = memo(function HeavyComponent5492({ config }: HeavyProps5492) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5492) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5492 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5492: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5492.displayName = 'HeavyComponent5492';
export default HeavyComponent5492;
