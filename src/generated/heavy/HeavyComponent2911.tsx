'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2911<T> = T extends (infer U)[]
  ? DeepReadonlyArray2911<U>
  : T extends object
  ? DeepReadonlyObject2911<T>
  : T;

interface DeepReadonlyArray2911<T> extends ReadonlyArray<DeepReadonly2911<T>> {}

type DeepReadonlyObject2911<T> = {
  readonly [P in keyof T]: DeepReadonly2911<T[P]>;
};

type UnionToIntersection2911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2911<T> = UnionToIntersection2911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2911<T extends unknown[], V> = [...T, V];

type TuplifyUnion2911<T, L = LastOf2911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2911<TuplifyUnion2911<Exclude<T, L>>, L>;

type DeepPartial2911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2911<T[P]> }
  : T;

type Paths2911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2911<K, Paths2911<T[K], Prev2911[D]>> : never }[keyof T]
  : never;

type Prev2911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2911 {
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

type ConfigPaths2911 = Paths2911<NestedConfig2911>;

interface HeavyProps2911 {
  config: DeepPartial2911<NestedConfig2911>;
  path?: ConfigPaths2911;
}

const HeavyComponent2911 = memo(function HeavyComponent2911({ config }: HeavyProps2911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2911.displayName = 'HeavyComponent2911';
export default HeavyComponent2911;
