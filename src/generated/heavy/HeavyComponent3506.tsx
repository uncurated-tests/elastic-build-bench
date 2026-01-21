'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3506<T> = T extends (infer U)[]
  ? DeepReadonlyArray3506<U>
  : T extends object
  ? DeepReadonlyObject3506<T>
  : T;

interface DeepReadonlyArray3506<T> extends ReadonlyArray<DeepReadonly3506<T>> {}

type DeepReadonlyObject3506<T> = {
  readonly [P in keyof T]: DeepReadonly3506<T[P]>;
};

type UnionToIntersection3506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3506<T> = UnionToIntersection3506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3506<T extends unknown[], V> = [...T, V];

type TuplifyUnion3506<T, L = LastOf3506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3506<TuplifyUnion3506<Exclude<T, L>>, L>;

type DeepPartial3506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3506<T[P]> }
  : T;

type Paths3506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3506<K, Paths3506<T[K], Prev3506[D]>> : never }[keyof T]
  : never;

type Prev3506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3506 {
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

type ConfigPaths3506 = Paths3506<NestedConfig3506>;

interface HeavyProps3506 {
  config: DeepPartial3506<NestedConfig3506>;
  path?: ConfigPaths3506;
}

const HeavyComponent3506 = memo(function HeavyComponent3506({ config }: HeavyProps3506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3506.displayName = 'HeavyComponent3506';
export default HeavyComponent3506;
