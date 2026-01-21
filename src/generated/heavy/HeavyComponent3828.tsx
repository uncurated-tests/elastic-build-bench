'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3828<T> = T extends (infer U)[]
  ? DeepReadonlyArray3828<U>
  : T extends object
  ? DeepReadonlyObject3828<T>
  : T;

interface DeepReadonlyArray3828<T> extends ReadonlyArray<DeepReadonly3828<T>> {}

type DeepReadonlyObject3828<T> = {
  readonly [P in keyof T]: DeepReadonly3828<T[P]>;
};

type UnionToIntersection3828<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3828<T> = UnionToIntersection3828<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3828<T extends unknown[], V> = [...T, V];

type TuplifyUnion3828<T, L = LastOf3828<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3828<TuplifyUnion3828<Exclude<T, L>>, L>;

type DeepPartial3828<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3828<T[P]> }
  : T;

type Paths3828<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3828<K, Paths3828<T[K], Prev3828[D]>> : never }[keyof T]
  : never;

type Prev3828 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3828<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3828 {
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

type ConfigPaths3828 = Paths3828<NestedConfig3828>;

interface HeavyProps3828 {
  config: DeepPartial3828<NestedConfig3828>;
  path?: ConfigPaths3828;
}

const HeavyComponent3828 = memo(function HeavyComponent3828({ config }: HeavyProps3828) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3828) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3828 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3828: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3828.displayName = 'HeavyComponent3828';
export default HeavyComponent3828;
