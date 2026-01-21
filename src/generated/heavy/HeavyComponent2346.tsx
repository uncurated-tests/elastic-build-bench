'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2346<T> = T extends (infer U)[]
  ? DeepReadonlyArray2346<U>
  : T extends object
  ? DeepReadonlyObject2346<T>
  : T;

interface DeepReadonlyArray2346<T> extends ReadonlyArray<DeepReadonly2346<T>> {}

type DeepReadonlyObject2346<T> = {
  readonly [P in keyof T]: DeepReadonly2346<T[P]>;
};

type UnionToIntersection2346<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2346<T> = UnionToIntersection2346<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2346<T extends unknown[], V> = [...T, V];

type TuplifyUnion2346<T, L = LastOf2346<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2346<TuplifyUnion2346<Exclude<T, L>>, L>;

type DeepPartial2346<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2346<T[P]> }
  : T;

type Paths2346<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2346<K, Paths2346<T[K], Prev2346[D]>> : never }[keyof T]
  : never;

type Prev2346 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2346<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2346 {
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

type ConfigPaths2346 = Paths2346<NestedConfig2346>;

interface HeavyProps2346 {
  config: DeepPartial2346<NestedConfig2346>;
  path?: ConfigPaths2346;
}

const HeavyComponent2346 = memo(function HeavyComponent2346({ config }: HeavyProps2346) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2346) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2346 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2346: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2346.displayName = 'HeavyComponent2346';
export default HeavyComponent2346;
