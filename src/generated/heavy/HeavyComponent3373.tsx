'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3373<T> = T extends (infer U)[]
  ? DeepReadonlyArray3373<U>
  : T extends object
  ? DeepReadonlyObject3373<T>
  : T;

interface DeepReadonlyArray3373<T> extends ReadonlyArray<DeepReadonly3373<T>> {}

type DeepReadonlyObject3373<T> = {
  readonly [P in keyof T]: DeepReadonly3373<T[P]>;
};

type UnionToIntersection3373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3373<T> = UnionToIntersection3373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3373<T extends unknown[], V> = [...T, V];

type TuplifyUnion3373<T, L = LastOf3373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3373<TuplifyUnion3373<Exclude<T, L>>, L>;

type DeepPartial3373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3373<T[P]> }
  : T;

type Paths3373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3373<K, Paths3373<T[K], Prev3373[D]>> : never }[keyof T]
  : never;

type Prev3373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3373 {
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

type ConfigPaths3373 = Paths3373<NestedConfig3373>;

interface HeavyProps3373 {
  config: DeepPartial3373<NestedConfig3373>;
  path?: ConfigPaths3373;
}

const HeavyComponent3373 = memo(function HeavyComponent3373({ config }: HeavyProps3373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3373.displayName = 'HeavyComponent3373';
export default HeavyComponent3373;
