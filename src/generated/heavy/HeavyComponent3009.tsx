'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3009<T> = T extends (infer U)[]
  ? DeepReadonlyArray3009<U>
  : T extends object
  ? DeepReadonlyObject3009<T>
  : T;

interface DeepReadonlyArray3009<T> extends ReadonlyArray<DeepReadonly3009<T>> {}

type DeepReadonlyObject3009<T> = {
  readonly [P in keyof T]: DeepReadonly3009<T[P]>;
};

type UnionToIntersection3009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3009<T> = UnionToIntersection3009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3009<T extends unknown[], V> = [...T, V];

type TuplifyUnion3009<T, L = LastOf3009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3009<TuplifyUnion3009<Exclude<T, L>>, L>;

type DeepPartial3009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3009<T[P]> }
  : T;

type Paths3009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3009<K, Paths3009<T[K], Prev3009[D]>> : never }[keyof T]
  : never;

type Prev3009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3009 {
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

type ConfigPaths3009 = Paths3009<NestedConfig3009>;

interface HeavyProps3009 {
  config: DeepPartial3009<NestedConfig3009>;
  path?: ConfigPaths3009;
}

const HeavyComponent3009 = memo(function HeavyComponent3009({ config }: HeavyProps3009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3009.displayName = 'HeavyComponent3009';
export default HeavyComponent3009;
