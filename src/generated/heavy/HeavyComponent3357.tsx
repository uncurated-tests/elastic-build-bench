'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3357<T> = T extends (infer U)[]
  ? DeepReadonlyArray3357<U>
  : T extends object
  ? DeepReadonlyObject3357<T>
  : T;

interface DeepReadonlyArray3357<T> extends ReadonlyArray<DeepReadonly3357<T>> {}

type DeepReadonlyObject3357<T> = {
  readonly [P in keyof T]: DeepReadonly3357<T[P]>;
};

type UnionToIntersection3357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3357<T> = UnionToIntersection3357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3357<T extends unknown[], V> = [...T, V];

type TuplifyUnion3357<T, L = LastOf3357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3357<TuplifyUnion3357<Exclude<T, L>>, L>;

type DeepPartial3357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3357<T[P]> }
  : T;

type Paths3357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3357<K, Paths3357<T[K], Prev3357[D]>> : never }[keyof T]
  : never;

type Prev3357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3357 {
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

type ConfigPaths3357 = Paths3357<NestedConfig3357>;

interface HeavyProps3357 {
  config: DeepPartial3357<NestedConfig3357>;
  path?: ConfigPaths3357;
}

const HeavyComponent3357 = memo(function HeavyComponent3357({ config }: HeavyProps3357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3357.displayName = 'HeavyComponent3357';
export default HeavyComponent3357;
