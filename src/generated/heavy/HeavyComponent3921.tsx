'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3921<T> = T extends (infer U)[]
  ? DeepReadonlyArray3921<U>
  : T extends object
  ? DeepReadonlyObject3921<T>
  : T;

interface DeepReadonlyArray3921<T> extends ReadonlyArray<DeepReadonly3921<T>> {}

type DeepReadonlyObject3921<T> = {
  readonly [P in keyof T]: DeepReadonly3921<T[P]>;
};

type UnionToIntersection3921<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3921<T> = UnionToIntersection3921<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3921<T extends unknown[], V> = [...T, V];

type TuplifyUnion3921<T, L = LastOf3921<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3921<TuplifyUnion3921<Exclude<T, L>>, L>;

type DeepPartial3921<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3921<T[P]> }
  : T;

type Paths3921<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3921<K, Paths3921<T[K], Prev3921[D]>> : never }[keyof T]
  : never;

type Prev3921 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3921<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3921 {
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

type ConfigPaths3921 = Paths3921<NestedConfig3921>;

interface HeavyProps3921 {
  config: DeepPartial3921<NestedConfig3921>;
  path?: ConfigPaths3921;
}

const HeavyComponent3921 = memo(function HeavyComponent3921({ config }: HeavyProps3921) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3921) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3921 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3921: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3921.displayName = 'HeavyComponent3921';
export default HeavyComponent3921;
