'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3794<T> = T extends (infer U)[]
  ? DeepReadonlyArray3794<U>
  : T extends object
  ? DeepReadonlyObject3794<T>
  : T;

interface DeepReadonlyArray3794<T> extends ReadonlyArray<DeepReadonly3794<T>> {}

type DeepReadonlyObject3794<T> = {
  readonly [P in keyof T]: DeepReadonly3794<T[P]>;
};

type UnionToIntersection3794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3794<T> = UnionToIntersection3794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3794<T extends unknown[], V> = [...T, V];

type TuplifyUnion3794<T, L = LastOf3794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3794<TuplifyUnion3794<Exclude<T, L>>, L>;

type DeepPartial3794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3794<T[P]> }
  : T;

type Paths3794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3794<K, Paths3794<T[K], Prev3794[D]>> : never }[keyof T]
  : never;

type Prev3794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3794 {
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

type ConfigPaths3794 = Paths3794<NestedConfig3794>;

interface HeavyProps3794 {
  config: DeepPartial3794<NestedConfig3794>;
  path?: ConfigPaths3794;
}

const HeavyComponent3794 = memo(function HeavyComponent3794({ config }: HeavyProps3794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3794.displayName = 'HeavyComponent3794';
export default HeavyComponent3794;
