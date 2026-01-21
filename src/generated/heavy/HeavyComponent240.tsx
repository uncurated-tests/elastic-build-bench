'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly240<T> = T extends (infer U)[]
  ? DeepReadonlyArray240<U>
  : T extends object
  ? DeepReadonlyObject240<T>
  : T;

interface DeepReadonlyArray240<T> extends ReadonlyArray<DeepReadonly240<T>> {}

type DeepReadonlyObject240<T> = {
  readonly [P in keyof T]: DeepReadonly240<T[P]>;
};

type UnionToIntersection240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf240<T> = UnionToIntersection240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push240<T extends unknown[], V> = [...T, V];

type TuplifyUnion240<T, L = LastOf240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push240<TuplifyUnion240<Exclude<T, L>>, L>;

type DeepPartial240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial240<T[P]> }
  : T;

type Paths240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join240<K, Paths240<T[K], Prev240[D]>> : never }[keyof T]
  : never;

type Prev240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig240 {
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

type ConfigPaths240 = Paths240<NestedConfig240>;

interface HeavyProps240 {
  config: DeepPartial240<NestedConfig240>;
  path?: ConfigPaths240;
}

const HeavyComponent240 = memo(function HeavyComponent240({ config }: HeavyProps240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent240.displayName = 'HeavyComponent240';
export default HeavyComponent240;
