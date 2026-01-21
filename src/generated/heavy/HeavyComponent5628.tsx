'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5628<T> = T extends (infer U)[]
  ? DeepReadonlyArray5628<U>
  : T extends object
  ? DeepReadonlyObject5628<T>
  : T;

interface DeepReadonlyArray5628<T> extends ReadonlyArray<DeepReadonly5628<T>> {}

type DeepReadonlyObject5628<T> = {
  readonly [P in keyof T]: DeepReadonly5628<T[P]>;
};

type UnionToIntersection5628<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5628<T> = UnionToIntersection5628<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5628<T extends unknown[], V> = [...T, V];

type TuplifyUnion5628<T, L = LastOf5628<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5628<TuplifyUnion5628<Exclude<T, L>>, L>;

type DeepPartial5628<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5628<T[P]> }
  : T;

type Paths5628<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5628<K, Paths5628<T[K], Prev5628[D]>> : never }[keyof T]
  : never;

type Prev5628 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5628<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5628 {
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

type ConfigPaths5628 = Paths5628<NestedConfig5628>;

interface HeavyProps5628 {
  config: DeepPartial5628<NestedConfig5628>;
  path?: ConfigPaths5628;
}

const HeavyComponent5628 = memo(function HeavyComponent5628({ config }: HeavyProps5628) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5628) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5628 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5628: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5628.displayName = 'HeavyComponent5628';
export default HeavyComponent5628;
