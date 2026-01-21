'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3027<T> = T extends (infer U)[]
  ? DeepReadonlyArray3027<U>
  : T extends object
  ? DeepReadonlyObject3027<T>
  : T;

interface DeepReadonlyArray3027<T> extends ReadonlyArray<DeepReadonly3027<T>> {}

type DeepReadonlyObject3027<T> = {
  readonly [P in keyof T]: DeepReadonly3027<T[P]>;
};

type UnionToIntersection3027<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3027<T> = UnionToIntersection3027<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3027<T extends unknown[], V> = [...T, V];

type TuplifyUnion3027<T, L = LastOf3027<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3027<TuplifyUnion3027<Exclude<T, L>>, L>;

type DeepPartial3027<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3027<T[P]> }
  : T;

type Paths3027<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3027<K, Paths3027<T[K], Prev3027[D]>> : never }[keyof T]
  : never;

type Prev3027 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3027<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3027 {
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

type ConfigPaths3027 = Paths3027<NestedConfig3027>;

interface HeavyProps3027 {
  config: DeepPartial3027<NestedConfig3027>;
  path?: ConfigPaths3027;
}

const HeavyComponent3027 = memo(function HeavyComponent3027({ config }: HeavyProps3027) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3027) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3027 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3027: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3027.displayName = 'HeavyComponent3027';
export default HeavyComponent3027;
