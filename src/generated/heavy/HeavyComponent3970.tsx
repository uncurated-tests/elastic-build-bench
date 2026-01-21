'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3970<T> = T extends (infer U)[]
  ? DeepReadonlyArray3970<U>
  : T extends object
  ? DeepReadonlyObject3970<T>
  : T;

interface DeepReadonlyArray3970<T> extends ReadonlyArray<DeepReadonly3970<T>> {}

type DeepReadonlyObject3970<T> = {
  readonly [P in keyof T]: DeepReadonly3970<T[P]>;
};

type UnionToIntersection3970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3970<T> = UnionToIntersection3970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3970<T extends unknown[], V> = [...T, V];

type TuplifyUnion3970<T, L = LastOf3970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3970<TuplifyUnion3970<Exclude<T, L>>, L>;

type DeepPartial3970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3970<T[P]> }
  : T;

type Paths3970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3970<K, Paths3970<T[K], Prev3970[D]>> : never }[keyof T]
  : never;

type Prev3970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3970 {
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

type ConfigPaths3970 = Paths3970<NestedConfig3970>;

interface HeavyProps3970 {
  config: DeepPartial3970<NestedConfig3970>;
  path?: ConfigPaths3970;
}

const HeavyComponent3970 = memo(function HeavyComponent3970({ config }: HeavyProps3970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3970.displayName = 'HeavyComponent3970';
export default HeavyComponent3970;
