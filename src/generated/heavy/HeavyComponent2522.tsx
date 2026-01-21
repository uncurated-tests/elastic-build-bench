'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2522<T> = T extends (infer U)[]
  ? DeepReadonlyArray2522<U>
  : T extends object
  ? DeepReadonlyObject2522<T>
  : T;

interface DeepReadonlyArray2522<T> extends ReadonlyArray<DeepReadonly2522<T>> {}

type DeepReadonlyObject2522<T> = {
  readonly [P in keyof T]: DeepReadonly2522<T[P]>;
};

type UnionToIntersection2522<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2522<T> = UnionToIntersection2522<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2522<T extends unknown[], V> = [...T, V];

type TuplifyUnion2522<T, L = LastOf2522<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2522<TuplifyUnion2522<Exclude<T, L>>, L>;

type DeepPartial2522<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2522<T[P]> }
  : T;

type Paths2522<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2522<K, Paths2522<T[K], Prev2522[D]>> : never }[keyof T]
  : never;

type Prev2522 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2522<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2522 {
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

type ConfigPaths2522 = Paths2522<NestedConfig2522>;

interface HeavyProps2522 {
  config: DeepPartial2522<NestedConfig2522>;
  path?: ConfigPaths2522;
}

const HeavyComponent2522 = memo(function HeavyComponent2522({ config }: HeavyProps2522) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2522) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2522 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2522: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2522.displayName = 'HeavyComponent2522';
export default HeavyComponent2522;
