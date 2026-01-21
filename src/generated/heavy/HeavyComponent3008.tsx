'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3008<T> = T extends (infer U)[]
  ? DeepReadonlyArray3008<U>
  : T extends object
  ? DeepReadonlyObject3008<T>
  : T;

interface DeepReadonlyArray3008<T> extends ReadonlyArray<DeepReadonly3008<T>> {}

type DeepReadonlyObject3008<T> = {
  readonly [P in keyof T]: DeepReadonly3008<T[P]>;
};

type UnionToIntersection3008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3008<T> = UnionToIntersection3008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3008<T extends unknown[], V> = [...T, V];

type TuplifyUnion3008<T, L = LastOf3008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3008<TuplifyUnion3008<Exclude<T, L>>, L>;

type DeepPartial3008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3008<T[P]> }
  : T;

type Paths3008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3008<K, Paths3008<T[K], Prev3008[D]>> : never }[keyof T]
  : never;

type Prev3008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3008 {
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

type ConfigPaths3008 = Paths3008<NestedConfig3008>;

interface HeavyProps3008 {
  config: DeepPartial3008<NestedConfig3008>;
  path?: ConfigPaths3008;
}

const HeavyComponent3008 = memo(function HeavyComponent3008({ config }: HeavyProps3008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3008.displayName = 'HeavyComponent3008';
export default HeavyComponent3008;
