'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3361<T> = T extends (infer U)[]
  ? DeepReadonlyArray3361<U>
  : T extends object
  ? DeepReadonlyObject3361<T>
  : T;

interface DeepReadonlyArray3361<T> extends ReadonlyArray<DeepReadonly3361<T>> {}

type DeepReadonlyObject3361<T> = {
  readonly [P in keyof T]: DeepReadonly3361<T[P]>;
};

type UnionToIntersection3361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3361<T> = UnionToIntersection3361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3361<T extends unknown[], V> = [...T, V];

type TuplifyUnion3361<T, L = LastOf3361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3361<TuplifyUnion3361<Exclude<T, L>>, L>;

type DeepPartial3361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3361<T[P]> }
  : T;

type Paths3361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3361<K, Paths3361<T[K], Prev3361[D]>> : never }[keyof T]
  : never;

type Prev3361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3361 {
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

type ConfigPaths3361 = Paths3361<NestedConfig3361>;

interface HeavyProps3361 {
  config: DeepPartial3361<NestedConfig3361>;
  path?: ConfigPaths3361;
}

const HeavyComponent3361 = memo(function HeavyComponent3361({ config }: HeavyProps3361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3361.displayName = 'HeavyComponent3361';
export default HeavyComponent3361;
