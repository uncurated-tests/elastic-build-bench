'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2959<T> = T extends (infer U)[]
  ? DeepReadonlyArray2959<U>
  : T extends object
  ? DeepReadonlyObject2959<T>
  : T;

interface DeepReadonlyArray2959<T> extends ReadonlyArray<DeepReadonly2959<T>> {}

type DeepReadonlyObject2959<T> = {
  readonly [P in keyof T]: DeepReadonly2959<T[P]>;
};

type UnionToIntersection2959<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2959<T> = UnionToIntersection2959<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2959<T extends unknown[], V> = [...T, V];

type TuplifyUnion2959<T, L = LastOf2959<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2959<TuplifyUnion2959<Exclude<T, L>>, L>;

type DeepPartial2959<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2959<T[P]> }
  : T;

type Paths2959<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2959<K, Paths2959<T[K], Prev2959[D]>> : never }[keyof T]
  : never;

type Prev2959 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2959<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2959 {
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

type ConfigPaths2959 = Paths2959<NestedConfig2959>;

interface HeavyProps2959 {
  config: DeepPartial2959<NestedConfig2959>;
  path?: ConfigPaths2959;
}

const HeavyComponent2959 = memo(function HeavyComponent2959({ config }: HeavyProps2959) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2959) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2959 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2959: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2959.displayName = 'HeavyComponent2959';
export default HeavyComponent2959;
