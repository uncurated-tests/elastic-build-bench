'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3307<T> = T extends (infer U)[]
  ? DeepReadonlyArray3307<U>
  : T extends object
  ? DeepReadonlyObject3307<T>
  : T;

interface DeepReadonlyArray3307<T> extends ReadonlyArray<DeepReadonly3307<T>> {}

type DeepReadonlyObject3307<T> = {
  readonly [P in keyof T]: DeepReadonly3307<T[P]>;
};

type UnionToIntersection3307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3307<T> = UnionToIntersection3307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3307<T extends unknown[], V> = [...T, V];

type TuplifyUnion3307<T, L = LastOf3307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3307<TuplifyUnion3307<Exclude<T, L>>, L>;

type DeepPartial3307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3307<T[P]> }
  : T;

type Paths3307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3307<K, Paths3307<T[K], Prev3307[D]>> : never }[keyof T]
  : never;

type Prev3307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3307 {
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

type ConfigPaths3307 = Paths3307<NestedConfig3307>;

interface HeavyProps3307 {
  config: DeepPartial3307<NestedConfig3307>;
  path?: ConfigPaths3307;
}

const HeavyComponent3307 = memo(function HeavyComponent3307({ config }: HeavyProps3307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3307.displayName = 'HeavyComponent3307';
export default HeavyComponent3307;
