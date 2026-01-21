'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2421<T> = T extends (infer U)[]
  ? DeepReadonlyArray2421<U>
  : T extends object
  ? DeepReadonlyObject2421<T>
  : T;

interface DeepReadonlyArray2421<T> extends ReadonlyArray<DeepReadonly2421<T>> {}

type DeepReadonlyObject2421<T> = {
  readonly [P in keyof T]: DeepReadonly2421<T[P]>;
};

type UnionToIntersection2421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2421<T> = UnionToIntersection2421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2421<T extends unknown[], V> = [...T, V];

type TuplifyUnion2421<T, L = LastOf2421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2421<TuplifyUnion2421<Exclude<T, L>>, L>;

type DeepPartial2421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2421<T[P]> }
  : T;

type Paths2421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2421<K, Paths2421<T[K], Prev2421[D]>> : never }[keyof T]
  : never;

type Prev2421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2421 {
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

type ConfigPaths2421 = Paths2421<NestedConfig2421>;

interface HeavyProps2421 {
  config: DeepPartial2421<NestedConfig2421>;
  path?: ConfigPaths2421;
}

const HeavyComponent2421 = memo(function HeavyComponent2421({ config }: HeavyProps2421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2421.displayName = 'HeavyComponent2421';
export default HeavyComponent2421;
