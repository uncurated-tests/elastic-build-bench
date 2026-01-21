'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly973<T> = T extends (infer U)[]
  ? DeepReadonlyArray973<U>
  : T extends object
  ? DeepReadonlyObject973<T>
  : T;

interface DeepReadonlyArray973<T> extends ReadonlyArray<DeepReadonly973<T>> {}

type DeepReadonlyObject973<T> = {
  readonly [P in keyof T]: DeepReadonly973<T[P]>;
};

type UnionToIntersection973<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf973<T> = UnionToIntersection973<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push973<T extends unknown[], V> = [...T, V];

type TuplifyUnion973<T, L = LastOf973<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push973<TuplifyUnion973<Exclude<T, L>>, L>;

type DeepPartial973<T> = T extends object
  ? { [P in keyof T]?: DeepPartial973<T[P]> }
  : T;

type Paths973<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join973<K, Paths973<T[K], Prev973[D]>> : never }[keyof T]
  : never;

type Prev973 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join973<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig973 {
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

type ConfigPaths973 = Paths973<NestedConfig973>;

interface HeavyProps973 {
  config: DeepPartial973<NestedConfig973>;
  path?: ConfigPaths973;
}

const HeavyComponent973 = memo(function HeavyComponent973({ config }: HeavyProps973) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 973) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-973 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H973: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent973.displayName = 'HeavyComponent973';
export default HeavyComponent973;
