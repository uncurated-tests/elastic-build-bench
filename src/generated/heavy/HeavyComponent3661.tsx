'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3661<T> = T extends (infer U)[]
  ? DeepReadonlyArray3661<U>
  : T extends object
  ? DeepReadonlyObject3661<T>
  : T;

interface DeepReadonlyArray3661<T> extends ReadonlyArray<DeepReadonly3661<T>> {}

type DeepReadonlyObject3661<T> = {
  readonly [P in keyof T]: DeepReadonly3661<T[P]>;
};

type UnionToIntersection3661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3661<T> = UnionToIntersection3661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3661<T extends unknown[], V> = [...T, V];

type TuplifyUnion3661<T, L = LastOf3661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3661<TuplifyUnion3661<Exclude<T, L>>, L>;

type DeepPartial3661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3661<T[P]> }
  : T;

type Paths3661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3661<K, Paths3661<T[K], Prev3661[D]>> : never }[keyof T]
  : never;

type Prev3661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3661 {
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

type ConfigPaths3661 = Paths3661<NestedConfig3661>;

interface HeavyProps3661 {
  config: DeepPartial3661<NestedConfig3661>;
  path?: ConfigPaths3661;
}

const HeavyComponent3661 = memo(function HeavyComponent3661({ config }: HeavyProps3661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3661.displayName = 'HeavyComponent3661';
export default HeavyComponent3661;
