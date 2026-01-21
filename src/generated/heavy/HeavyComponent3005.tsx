'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3005<T> = T extends (infer U)[]
  ? DeepReadonlyArray3005<U>
  : T extends object
  ? DeepReadonlyObject3005<T>
  : T;

interface DeepReadonlyArray3005<T> extends ReadonlyArray<DeepReadonly3005<T>> {}

type DeepReadonlyObject3005<T> = {
  readonly [P in keyof T]: DeepReadonly3005<T[P]>;
};

type UnionToIntersection3005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3005<T> = UnionToIntersection3005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3005<T extends unknown[], V> = [...T, V];

type TuplifyUnion3005<T, L = LastOf3005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3005<TuplifyUnion3005<Exclude<T, L>>, L>;

type DeepPartial3005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3005<T[P]> }
  : T;

type Paths3005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3005<K, Paths3005<T[K], Prev3005[D]>> : never }[keyof T]
  : never;

type Prev3005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3005 {
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

type ConfigPaths3005 = Paths3005<NestedConfig3005>;

interface HeavyProps3005 {
  config: DeepPartial3005<NestedConfig3005>;
  path?: ConfigPaths3005;
}

const HeavyComponent3005 = memo(function HeavyComponent3005({ config }: HeavyProps3005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3005.displayName = 'HeavyComponent3005';
export default HeavyComponent3005;
