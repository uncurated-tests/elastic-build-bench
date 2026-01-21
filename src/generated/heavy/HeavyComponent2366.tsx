'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2366<T> = T extends (infer U)[]
  ? DeepReadonlyArray2366<U>
  : T extends object
  ? DeepReadonlyObject2366<T>
  : T;

interface DeepReadonlyArray2366<T> extends ReadonlyArray<DeepReadonly2366<T>> {}

type DeepReadonlyObject2366<T> = {
  readonly [P in keyof T]: DeepReadonly2366<T[P]>;
};

type UnionToIntersection2366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2366<T> = UnionToIntersection2366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2366<T extends unknown[], V> = [...T, V];

type TuplifyUnion2366<T, L = LastOf2366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2366<TuplifyUnion2366<Exclude<T, L>>, L>;

type DeepPartial2366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2366<T[P]> }
  : T;

type Paths2366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2366<K, Paths2366<T[K], Prev2366[D]>> : never }[keyof T]
  : never;

type Prev2366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2366 {
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

type ConfigPaths2366 = Paths2366<NestedConfig2366>;

interface HeavyProps2366 {
  config: DeepPartial2366<NestedConfig2366>;
  path?: ConfigPaths2366;
}

const HeavyComponent2366 = memo(function HeavyComponent2366({ config }: HeavyProps2366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2366.displayName = 'HeavyComponent2366';
export default HeavyComponent2366;
