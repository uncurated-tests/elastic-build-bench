'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly476<T> = T extends (infer U)[]
  ? DeepReadonlyArray476<U>
  : T extends object
  ? DeepReadonlyObject476<T>
  : T;

interface DeepReadonlyArray476<T> extends ReadonlyArray<DeepReadonly476<T>> {}

type DeepReadonlyObject476<T> = {
  readonly [P in keyof T]: DeepReadonly476<T[P]>;
};

type UnionToIntersection476<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf476<T> = UnionToIntersection476<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push476<T extends unknown[], V> = [...T, V];

type TuplifyUnion476<T, L = LastOf476<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push476<TuplifyUnion476<Exclude<T, L>>, L>;

type DeepPartial476<T> = T extends object
  ? { [P in keyof T]?: DeepPartial476<T[P]> }
  : T;

type Paths476<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join476<K, Paths476<T[K], Prev476[D]>> : never }[keyof T]
  : never;

type Prev476 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join476<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig476 {
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

type ConfigPaths476 = Paths476<NestedConfig476>;

interface HeavyProps476 {
  config: DeepPartial476<NestedConfig476>;
  path?: ConfigPaths476;
}

const HeavyComponent476 = memo(function HeavyComponent476({ config }: HeavyProps476) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 476) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-476 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H476: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent476.displayName = 'HeavyComponent476';
export default HeavyComponent476;
