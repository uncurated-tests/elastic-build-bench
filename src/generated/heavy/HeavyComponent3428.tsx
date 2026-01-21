'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3428<T> = T extends (infer U)[]
  ? DeepReadonlyArray3428<U>
  : T extends object
  ? DeepReadonlyObject3428<T>
  : T;

interface DeepReadonlyArray3428<T> extends ReadonlyArray<DeepReadonly3428<T>> {}

type DeepReadonlyObject3428<T> = {
  readonly [P in keyof T]: DeepReadonly3428<T[P]>;
};

type UnionToIntersection3428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3428<T> = UnionToIntersection3428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3428<T extends unknown[], V> = [...T, V];

type TuplifyUnion3428<T, L = LastOf3428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3428<TuplifyUnion3428<Exclude<T, L>>, L>;

type DeepPartial3428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3428<T[P]> }
  : T;

type Paths3428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3428<K, Paths3428<T[K], Prev3428[D]>> : never }[keyof T]
  : never;

type Prev3428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3428 {
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

type ConfigPaths3428 = Paths3428<NestedConfig3428>;

interface HeavyProps3428 {
  config: DeepPartial3428<NestedConfig3428>;
  path?: ConfigPaths3428;
}

const HeavyComponent3428 = memo(function HeavyComponent3428({ config }: HeavyProps3428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3428.displayName = 'HeavyComponent3428';
export default HeavyComponent3428;
