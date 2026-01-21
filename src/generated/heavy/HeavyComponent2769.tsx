'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2769<T> = T extends (infer U)[]
  ? DeepReadonlyArray2769<U>
  : T extends object
  ? DeepReadonlyObject2769<T>
  : T;

interface DeepReadonlyArray2769<T> extends ReadonlyArray<DeepReadonly2769<T>> {}

type DeepReadonlyObject2769<T> = {
  readonly [P in keyof T]: DeepReadonly2769<T[P]>;
};

type UnionToIntersection2769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2769<T> = UnionToIntersection2769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2769<T extends unknown[], V> = [...T, V];

type TuplifyUnion2769<T, L = LastOf2769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2769<TuplifyUnion2769<Exclude<T, L>>, L>;

type DeepPartial2769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2769<T[P]> }
  : T;

type Paths2769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2769<K, Paths2769<T[K], Prev2769[D]>> : never }[keyof T]
  : never;

type Prev2769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2769 {
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

type ConfigPaths2769 = Paths2769<NestedConfig2769>;

interface HeavyProps2769 {
  config: DeepPartial2769<NestedConfig2769>;
  path?: ConfigPaths2769;
}

const HeavyComponent2769 = memo(function HeavyComponent2769({ config }: HeavyProps2769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2769.displayName = 'HeavyComponent2769';
export default HeavyComponent2769;
