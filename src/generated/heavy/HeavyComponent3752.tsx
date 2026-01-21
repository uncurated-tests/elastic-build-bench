'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3752<T> = T extends (infer U)[]
  ? DeepReadonlyArray3752<U>
  : T extends object
  ? DeepReadonlyObject3752<T>
  : T;

interface DeepReadonlyArray3752<T> extends ReadonlyArray<DeepReadonly3752<T>> {}

type DeepReadonlyObject3752<T> = {
  readonly [P in keyof T]: DeepReadonly3752<T[P]>;
};

type UnionToIntersection3752<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3752<T> = UnionToIntersection3752<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3752<T extends unknown[], V> = [...T, V];

type TuplifyUnion3752<T, L = LastOf3752<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3752<TuplifyUnion3752<Exclude<T, L>>, L>;

type DeepPartial3752<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3752<T[P]> }
  : T;

type Paths3752<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3752<K, Paths3752<T[K], Prev3752[D]>> : never }[keyof T]
  : never;

type Prev3752 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3752<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3752 {
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

type ConfigPaths3752 = Paths3752<NestedConfig3752>;

interface HeavyProps3752 {
  config: DeepPartial3752<NestedConfig3752>;
  path?: ConfigPaths3752;
}

const HeavyComponent3752 = memo(function HeavyComponent3752({ config }: HeavyProps3752) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3752) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3752 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3752: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3752.displayName = 'HeavyComponent3752';
export default HeavyComponent3752;
