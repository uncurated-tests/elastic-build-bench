'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3146<T> = T extends (infer U)[]
  ? DeepReadonlyArray3146<U>
  : T extends object
  ? DeepReadonlyObject3146<T>
  : T;

interface DeepReadonlyArray3146<T> extends ReadonlyArray<DeepReadonly3146<T>> {}

type DeepReadonlyObject3146<T> = {
  readonly [P in keyof T]: DeepReadonly3146<T[P]>;
};

type UnionToIntersection3146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3146<T> = UnionToIntersection3146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3146<T extends unknown[], V> = [...T, V];

type TuplifyUnion3146<T, L = LastOf3146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3146<TuplifyUnion3146<Exclude<T, L>>, L>;

type DeepPartial3146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3146<T[P]> }
  : T;

type Paths3146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3146<K, Paths3146<T[K], Prev3146[D]>> : never }[keyof T]
  : never;

type Prev3146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3146 {
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

type ConfigPaths3146 = Paths3146<NestedConfig3146>;

interface HeavyProps3146 {
  config: DeepPartial3146<NestedConfig3146>;
  path?: ConfigPaths3146;
}

const HeavyComponent3146 = memo(function HeavyComponent3146({ config }: HeavyProps3146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3146.displayName = 'HeavyComponent3146';
export default HeavyComponent3146;
