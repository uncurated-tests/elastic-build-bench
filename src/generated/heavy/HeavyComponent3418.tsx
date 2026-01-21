'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3418<T> = T extends (infer U)[]
  ? DeepReadonlyArray3418<U>
  : T extends object
  ? DeepReadonlyObject3418<T>
  : T;

interface DeepReadonlyArray3418<T> extends ReadonlyArray<DeepReadonly3418<T>> {}

type DeepReadonlyObject3418<T> = {
  readonly [P in keyof T]: DeepReadonly3418<T[P]>;
};

type UnionToIntersection3418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3418<T> = UnionToIntersection3418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3418<T extends unknown[], V> = [...T, V];

type TuplifyUnion3418<T, L = LastOf3418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3418<TuplifyUnion3418<Exclude<T, L>>, L>;

type DeepPartial3418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3418<T[P]> }
  : T;

type Paths3418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3418<K, Paths3418<T[K], Prev3418[D]>> : never }[keyof T]
  : never;

type Prev3418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3418 {
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

type ConfigPaths3418 = Paths3418<NestedConfig3418>;

interface HeavyProps3418 {
  config: DeepPartial3418<NestedConfig3418>;
  path?: ConfigPaths3418;
}

const HeavyComponent3418 = memo(function HeavyComponent3418({ config }: HeavyProps3418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3418.displayName = 'HeavyComponent3418';
export default HeavyComponent3418;
