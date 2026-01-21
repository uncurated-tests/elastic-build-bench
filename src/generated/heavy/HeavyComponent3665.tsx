'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3665<T> = T extends (infer U)[]
  ? DeepReadonlyArray3665<U>
  : T extends object
  ? DeepReadonlyObject3665<T>
  : T;

interface DeepReadonlyArray3665<T> extends ReadonlyArray<DeepReadonly3665<T>> {}

type DeepReadonlyObject3665<T> = {
  readonly [P in keyof T]: DeepReadonly3665<T[P]>;
};

type UnionToIntersection3665<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3665<T> = UnionToIntersection3665<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3665<T extends unknown[], V> = [...T, V];

type TuplifyUnion3665<T, L = LastOf3665<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3665<TuplifyUnion3665<Exclude<T, L>>, L>;

type DeepPartial3665<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3665<T[P]> }
  : T;

type Paths3665<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3665<K, Paths3665<T[K], Prev3665[D]>> : never }[keyof T]
  : never;

type Prev3665 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3665<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3665 {
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

type ConfigPaths3665 = Paths3665<NestedConfig3665>;

interface HeavyProps3665 {
  config: DeepPartial3665<NestedConfig3665>;
  path?: ConfigPaths3665;
}

const HeavyComponent3665 = memo(function HeavyComponent3665({ config }: HeavyProps3665) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3665) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3665 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3665: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3665.displayName = 'HeavyComponent3665';
export default HeavyComponent3665;
