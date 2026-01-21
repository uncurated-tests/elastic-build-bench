'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3792<T> = T extends (infer U)[]
  ? DeepReadonlyArray3792<U>
  : T extends object
  ? DeepReadonlyObject3792<T>
  : T;

interface DeepReadonlyArray3792<T> extends ReadonlyArray<DeepReadonly3792<T>> {}

type DeepReadonlyObject3792<T> = {
  readonly [P in keyof T]: DeepReadonly3792<T[P]>;
};

type UnionToIntersection3792<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3792<T> = UnionToIntersection3792<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3792<T extends unknown[], V> = [...T, V];

type TuplifyUnion3792<T, L = LastOf3792<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3792<TuplifyUnion3792<Exclude<T, L>>, L>;

type DeepPartial3792<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3792<T[P]> }
  : T;

type Paths3792<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3792<K, Paths3792<T[K], Prev3792[D]>> : never }[keyof T]
  : never;

type Prev3792 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3792<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3792 {
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

type ConfigPaths3792 = Paths3792<NestedConfig3792>;

interface HeavyProps3792 {
  config: DeepPartial3792<NestedConfig3792>;
  path?: ConfigPaths3792;
}

const HeavyComponent3792 = memo(function HeavyComponent3792({ config }: HeavyProps3792) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3792) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3792 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3792: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3792.displayName = 'HeavyComponent3792';
export default HeavyComponent3792;
