'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5440<T> = T extends (infer U)[]
  ? DeepReadonlyArray5440<U>
  : T extends object
  ? DeepReadonlyObject5440<T>
  : T;

interface DeepReadonlyArray5440<T> extends ReadonlyArray<DeepReadonly5440<T>> {}

type DeepReadonlyObject5440<T> = {
  readonly [P in keyof T]: DeepReadonly5440<T[P]>;
};

type UnionToIntersection5440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5440<T> = UnionToIntersection5440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5440<T extends unknown[], V> = [...T, V];

type TuplifyUnion5440<T, L = LastOf5440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5440<TuplifyUnion5440<Exclude<T, L>>, L>;

type DeepPartial5440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5440<T[P]> }
  : T;

type Paths5440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5440<K, Paths5440<T[K], Prev5440[D]>> : never }[keyof T]
  : never;

type Prev5440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5440 {
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

type ConfigPaths5440 = Paths5440<NestedConfig5440>;

interface HeavyProps5440 {
  config: DeepPartial5440<NestedConfig5440>;
  path?: ConfigPaths5440;
}

const HeavyComponent5440 = memo(function HeavyComponent5440({ config }: HeavyProps5440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5440.displayName = 'HeavyComponent5440';
export default HeavyComponent5440;
