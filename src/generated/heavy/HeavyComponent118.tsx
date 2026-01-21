'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly118<T> = T extends (infer U)[]
  ? DeepReadonlyArray118<U>
  : T extends object
  ? DeepReadonlyObject118<T>
  : T;

interface DeepReadonlyArray118<T> extends ReadonlyArray<DeepReadonly118<T>> {}

type DeepReadonlyObject118<T> = {
  readonly [P in keyof T]: DeepReadonly118<T[P]>;
};

type UnionToIntersection118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf118<T> = UnionToIntersection118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push118<T extends unknown[], V> = [...T, V];

type TuplifyUnion118<T, L = LastOf118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push118<TuplifyUnion118<Exclude<T, L>>, L>;

type DeepPartial118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial118<T[P]> }
  : T;

type Paths118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join118<K, Paths118<T[K], Prev118[D]>> : never }[keyof T]
  : never;

type Prev118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig118 {
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

type ConfigPaths118 = Paths118<NestedConfig118>;

interface HeavyProps118 {
  config: DeepPartial118<NestedConfig118>;
  path?: ConfigPaths118;
}

const HeavyComponent118 = memo(function HeavyComponent118({ config }: HeavyProps118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent118.displayName = 'HeavyComponent118';
export default HeavyComponent118;
