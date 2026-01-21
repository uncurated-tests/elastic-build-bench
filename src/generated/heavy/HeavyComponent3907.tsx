'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3907<T> = T extends (infer U)[]
  ? DeepReadonlyArray3907<U>
  : T extends object
  ? DeepReadonlyObject3907<T>
  : T;

interface DeepReadonlyArray3907<T> extends ReadonlyArray<DeepReadonly3907<T>> {}

type DeepReadonlyObject3907<T> = {
  readonly [P in keyof T]: DeepReadonly3907<T[P]>;
};

type UnionToIntersection3907<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3907<T> = UnionToIntersection3907<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3907<T extends unknown[], V> = [...T, V];

type TuplifyUnion3907<T, L = LastOf3907<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3907<TuplifyUnion3907<Exclude<T, L>>, L>;

type DeepPartial3907<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3907<T[P]> }
  : T;

type Paths3907<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3907<K, Paths3907<T[K], Prev3907[D]>> : never }[keyof T]
  : never;

type Prev3907 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3907<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3907 {
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

type ConfigPaths3907 = Paths3907<NestedConfig3907>;

interface HeavyProps3907 {
  config: DeepPartial3907<NestedConfig3907>;
  path?: ConfigPaths3907;
}

const HeavyComponent3907 = memo(function HeavyComponent3907({ config }: HeavyProps3907) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3907) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3907 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3907: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3907.displayName = 'HeavyComponent3907';
export default HeavyComponent3907;
