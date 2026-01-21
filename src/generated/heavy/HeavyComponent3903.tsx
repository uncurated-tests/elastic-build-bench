'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3903<T> = T extends (infer U)[]
  ? DeepReadonlyArray3903<U>
  : T extends object
  ? DeepReadonlyObject3903<T>
  : T;

interface DeepReadonlyArray3903<T> extends ReadonlyArray<DeepReadonly3903<T>> {}

type DeepReadonlyObject3903<T> = {
  readonly [P in keyof T]: DeepReadonly3903<T[P]>;
};

type UnionToIntersection3903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3903<T> = UnionToIntersection3903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3903<T extends unknown[], V> = [...T, V];

type TuplifyUnion3903<T, L = LastOf3903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3903<TuplifyUnion3903<Exclude<T, L>>, L>;

type DeepPartial3903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3903<T[P]> }
  : T;

type Paths3903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3903<K, Paths3903<T[K], Prev3903[D]>> : never }[keyof T]
  : never;

type Prev3903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3903 {
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

type ConfigPaths3903 = Paths3903<NestedConfig3903>;

interface HeavyProps3903 {
  config: DeepPartial3903<NestedConfig3903>;
  path?: ConfigPaths3903;
}

const HeavyComponent3903 = memo(function HeavyComponent3903({ config }: HeavyProps3903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3903.displayName = 'HeavyComponent3903';
export default HeavyComponent3903;
