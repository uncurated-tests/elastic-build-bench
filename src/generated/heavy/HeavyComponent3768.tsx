'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3768<T> = T extends (infer U)[]
  ? DeepReadonlyArray3768<U>
  : T extends object
  ? DeepReadonlyObject3768<T>
  : T;

interface DeepReadonlyArray3768<T> extends ReadonlyArray<DeepReadonly3768<T>> {}

type DeepReadonlyObject3768<T> = {
  readonly [P in keyof T]: DeepReadonly3768<T[P]>;
};

type UnionToIntersection3768<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3768<T> = UnionToIntersection3768<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3768<T extends unknown[], V> = [...T, V];

type TuplifyUnion3768<T, L = LastOf3768<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3768<TuplifyUnion3768<Exclude<T, L>>, L>;

type DeepPartial3768<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3768<T[P]> }
  : T;

type Paths3768<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3768<K, Paths3768<T[K], Prev3768[D]>> : never }[keyof T]
  : never;

type Prev3768 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3768<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3768 {
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

type ConfigPaths3768 = Paths3768<NestedConfig3768>;

interface HeavyProps3768 {
  config: DeepPartial3768<NestedConfig3768>;
  path?: ConfigPaths3768;
}

const HeavyComponent3768 = memo(function HeavyComponent3768({ config }: HeavyProps3768) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3768) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3768 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3768: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3768.displayName = 'HeavyComponent3768';
export default HeavyComponent3768;
