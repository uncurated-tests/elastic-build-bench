'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3501<T> = T extends (infer U)[]
  ? DeepReadonlyArray3501<U>
  : T extends object
  ? DeepReadonlyObject3501<T>
  : T;

interface DeepReadonlyArray3501<T> extends ReadonlyArray<DeepReadonly3501<T>> {}

type DeepReadonlyObject3501<T> = {
  readonly [P in keyof T]: DeepReadonly3501<T[P]>;
};

type UnionToIntersection3501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3501<T> = UnionToIntersection3501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3501<T extends unknown[], V> = [...T, V];

type TuplifyUnion3501<T, L = LastOf3501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3501<TuplifyUnion3501<Exclude<T, L>>, L>;

type DeepPartial3501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3501<T[P]> }
  : T;

type Paths3501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3501<K, Paths3501<T[K], Prev3501[D]>> : never }[keyof T]
  : never;

type Prev3501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3501 {
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

type ConfigPaths3501 = Paths3501<NestedConfig3501>;

interface HeavyProps3501 {
  config: DeepPartial3501<NestedConfig3501>;
  path?: ConfigPaths3501;
}

const HeavyComponent3501 = memo(function HeavyComponent3501({ config }: HeavyProps3501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3501.displayName = 'HeavyComponent3501';
export default HeavyComponent3501;
