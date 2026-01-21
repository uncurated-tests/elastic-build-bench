'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3670<T> = T extends (infer U)[]
  ? DeepReadonlyArray3670<U>
  : T extends object
  ? DeepReadonlyObject3670<T>
  : T;

interface DeepReadonlyArray3670<T> extends ReadonlyArray<DeepReadonly3670<T>> {}

type DeepReadonlyObject3670<T> = {
  readonly [P in keyof T]: DeepReadonly3670<T[P]>;
};

type UnionToIntersection3670<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3670<T> = UnionToIntersection3670<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3670<T extends unknown[], V> = [...T, V];

type TuplifyUnion3670<T, L = LastOf3670<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3670<TuplifyUnion3670<Exclude<T, L>>, L>;

type DeepPartial3670<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3670<T[P]> }
  : T;

type Paths3670<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3670<K, Paths3670<T[K], Prev3670[D]>> : never }[keyof T]
  : never;

type Prev3670 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3670<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3670 {
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

type ConfigPaths3670 = Paths3670<NestedConfig3670>;

interface HeavyProps3670 {
  config: DeepPartial3670<NestedConfig3670>;
  path?: ConfigPaths3670;
}

const HeavyComponent3670 = memo(function HeavyComponent3670({ config }: HeavyProps3670) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3670) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3670 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3670: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3670.displayName = 'HeavyComponent3670';
export default HeavyComponent3670;
