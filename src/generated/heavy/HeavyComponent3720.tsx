'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3720<T> = T extends (infer U)[]
  ? DeepReadonlyArray3720<U>
  : T extends object
  ? DeepReadonlyObject3720<T>
  : T;

interface DeepReadonlyArray3720<T> extends ReadonlyArray<DeepReadonly3720<T>> {}

type DeepReadonlyObject3720<T> = {
  readonly [P in keyof T]: DeepReadonly3720<T[P]>;
};

type UnionToIntersection3720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3720<T> = UnionToIntersection3720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3720<T extends unknown[], V> = [...T, V];

type TuplifyUnion3720<T, L = LastOf3720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3720<TuplifyUnion3720<Exclude<T, L>>, L>;

type DeepPartial3720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3720<T[P]> }
  : T;

type Paths3720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3720<K, Paths3720<T[K], Prev3720[D]>> : never }[keyof T]
  : never;

type Prev3720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3720 {
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

type ConfigPaths3720 = Paths3720<NestedConfig3720>;

interface HeavyProps3720 {
  config: DeepPartial3720<NestedConfig3720>;
  path?: ConfigPaths3720;
}

const HeavyComponent3720 = memo(function HeavyComponent3720({ config }: HeavyProps3720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3720.displayName = 'HeavyComponent3720';
export default HeavyComponent3720;
