'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3773<T> = T extends (infer U)[]
  ? DeepReadonlyArray3773<U>
  : T extends object
  ? DeepReadonlyObject3773<T>
  : T;

interface DeepReadonlyArray3773<T> extends ReadonlyArray<DeepReadonly3773<T>> {}

type DeepReadonlyObject3773<T> = {
  readonly [P in keyof T]: DeepReadonly3773<T[P]>;
};

type UnionToIntersection3773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3773<T> = UnionToIntersection3773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3773<T extends unknown[], V> = [...T, V];

type TuplifyUnion3773<T, L = LastOf3773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3773<TuplifyUnion3773<Exclude<T, L>>, L>;

type DeepPartial3773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3773<T[P]> }
  : T;

type Paths3773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3773<K, Paths3773<T[K], Prev3773[D]>> : never }[keyof T]
  : never;

type Prev3773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3773 {
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

type ConfigPaths3773 = Paths3773<NestedConfig3773>;

interface HeavyProps3773 {
  config: DeepPartial3773<NestedConfig3773>;
  path?: ConfigPaths3773;
}

const HeavyComponent3773 = memo(function HeavyComponent3773({ config }: HeavyProps3773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3773.displayName = 'HeavyComponent3773';
export default HeavyComponent3773;
