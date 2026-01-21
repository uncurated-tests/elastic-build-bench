'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2373<T> = T extends (infer U)[]
  ? DeepReadonlyArray2373<U>
  : T extends object
  ? DeepReadonlyObject2373<T>
  : T;

interface DeepReadonlyArray2373<T> extends ReadonlyArray<DeepReadonly2373<T>> {}

type DeepReadonlyObject2373<T> = {
  readonly [P in keyof T]: DeepReadonly2373<T[P]>;
};

type UnionToIntersection2373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2373<T> = UnionToIntersection2373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2373<T extends unknown[], V> = [...T, V];

type TuplifyUnion2373<T, L = LastOf2373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2373<TuplifyUnion2373<Exclude<T, L>>, L>;

type DeepPartial2373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2373<T[P]> }
  : T;

type Paths2373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2373<K, Paths2373<T[K], Prev2373[D]>> : never }[keyof T]
  : never;

type Prev2373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2373 {
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

type ConfigPaths2373 = Paths2373<NestedConfig2373>;

interface HeavyProps2373 {
  config: DeepPartial2373<NestedConfig2373>;
  path?: ConfigPaths2373;
}

const HeavyComponent2373 = memo(function HeavyComponent2373({ config }: HeavyProps2373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2373.displayName = 'HeavyComponent2373';
export default HeavyComponent2373;
