'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly303<T> = T extends (infer U)[]
  ? DeepReadonlyArray303<U>
  : T extends object
  ? DeepReadonlyObject303<T>
  : T;

interface DeepReadonlyArray303<T> extends ReadonlyArray<DeepReadonly303<T>> {}

type DeepReadonlyObject303<T> = {
  readonly [P in keyof T]: DeepReadonly303<T[P]>;
};

type UnionToIntersection303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf303<T> = UnionToIntersection303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push303<T extends unknown[], V> = [...T, V];

type TuplifyUnion303<T, L = LastOf303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push303<TuplifyUnion303<Exclude<T, L>>, L>;

type DeepPartial303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial303<T[P]> }
  : T;

type Paths303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join303<K, Paths303<T[K], Prev303[D]>> : never }[keyof T]
  : never;

type Prev303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig303 {
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

type ConfigPaths303 = Paths303<NestedConfig303>;

interface HeavyProps303 {
  config: DeepPartial303<NestedConfig303>;
  path?: ConfigPaths303;
}

const HeavyComponent303 = memo(function HeavyComponent303({ config }: HeavyProps303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent303.displayName = 'HeavyComponent303';
export default HeavyComponent303;
