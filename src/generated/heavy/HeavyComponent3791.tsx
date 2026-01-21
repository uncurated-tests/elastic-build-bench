'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3791<T> = T extends (infer U)[]
  ? DeepReadonlyArray3791<U>
  : T extends object
  ? DeepReadonlyObject3791<T>
  : T;

interface DeepReadonlyArray3791<T> extends ReadonlyArray<DeepReadonly3791<T>> {}

type DeepReadonlyObject3791<T> = {
  readonly [P in keyof T]: DeepReadonly3791<T[P]>;
};

type UnionToIntersection3791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3791<T> = UnionToIntersection3791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3791<T extends unknown[], V> = [...T, V];

type TuplifyUnion3791<T, L = LastOf3791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3791<TuplifyUnion3791<Exclude<T, L>>, L>;

type DeepPartial3791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3791<T[P]> }
  : T;

type Paths3791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3791<K, Paths3791<T[K], Prev3791[D]>> : never }[keyof T]
  : never;

type Prev3791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3791 {
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

type ConfigPaths3791 = Paths3791<NestedConfig3791>;

interface HeavyProps3791 {
  config: DeepPartial3791<NestedConfig3791>;
  path?: ConfigPaths3791;
}

const HeavyComponent3791 = memo(function HeavyComponent3791({ config }: HeavyProps3791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3791.displayName = 'HeavyComponent3791';
export default HeavyComponent3791;
