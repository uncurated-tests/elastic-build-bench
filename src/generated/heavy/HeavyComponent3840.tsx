'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3840<T> = T extends (infer U)[]
  ? DeepReadonlyArray3840<U>
  : T extends object
  ? DeepReadonlyObject3840<T>
  : T;

interface DeepReadonlyArray3840<T> extends ReadonlyArray<DeepReadonly3840<T>> {}

type DeepReadonlyObject3840<T> = {
  readonly [P in keyof T]: DeepReadonly3840<T[P]>;
};

type UnionToIntersection3840<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3840<T> = UnionToIntersection3840<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3840<T extends unknown[], V> = [...T, V];

type TuplifyUnion3840<T, L = LastOf3840<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3840<TuplifyUnion3840<Exclude<T, L>>, L>;

type DeepPartial3840<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3840<T[P]> }
  : T;

type Paths3840<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3840<K, Paths3840<T[K], Prev3840[D]>> : never }[keyof T]
  : never;

type Prev3840 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3840<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3840 {
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

type ConfigPaths3840 = Paths3840<NestedConfig3840>;

interface HeavyProps3840 {
  config: DeepPartial3840<NestedConfig3840>;
  path?: ConfigPaths3840;
}

const HeavyComponent3840 = memo(function HeavyComponent3840({ config }: HeavyProps3840) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3840) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3840 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3840: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3840.displayName = 'HeavyComponent3840';
export default HeavyComponent3840;
