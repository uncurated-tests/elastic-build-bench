'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3757<T> = T extends (infer U)[]
  ? DeepReadonlyArray3757<U>
  : T extends object
  ? DeepReadonlyObject3757<T>
  : T;

interface DeepReadonlyArray3757<T> extends ReadonlyArray<DeepReadonly3757<T>> {}

type DeepReadonlyObject3757<T> = {
  readonly [P in keyof T]: DeepReadonly3757<T[P]>;
};

type UnionToIntersection3757<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3757<T> = UnionToIntersection3757<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3757<T extends unknown[], V> = [...T, V];

type TuplifyUnion3757<T, L = LastOf3757<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3757<TuplifyUnion3757<Exclude<T, L>>, L>;

type DeepPartial3757<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3757<T[P]> }
  : T;

type Paths3757<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3757<K, Paths3757<T[K], Prev3757[D]>> : never }[keyof T]
  : never;

type Prev3757 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3757<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3757 {
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

type ConfigPaths3757 = Paths3757<NestedConfig3757>;

interface HeavyProps3757 {
  config: DeepPartial3757<NestedConfig3757>;
  path?: ConfigPaths3757;
}

const HeavyComponent3757 = memo(function HeavyComponent3757({ config }: HeavyProps3757) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3757) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3757 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3757: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3757.displayName = 'HeavyComponent3757';
export default HeavyComponent3757;
