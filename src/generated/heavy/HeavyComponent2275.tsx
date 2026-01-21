'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2275<T> = T extends (infer U)[]
  ? DeepReadonlyArray2275<U>
  : T extends object
  ? DeepReadonlyObject2275<T>
  : T;

interface DeepReadonlyArray2275<T> extends ReadonlyArray<DeepReadonly2275<T>> {}

type DeepReadonlyObject2275<T> = {
  readonly [P in keyof T]: DeepReadonly2275<T[P]>;
};

type UnionToIntersection2275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2275<T> = UnionToIntersection2275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2275<T extends unknown[], V> = [...T, V];

type TuplifyUnion2275<T, L = LastOf2275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2275<TuplifyUnion2275<Exclude<T, L>>, L>;

type DeepPartial2275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2275<T[P]> }
  : T;

type Paths2275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2275<K, Paths2275<T[K], Prev2275[D]>> : never }[keyof T]
  : never;

type Prev2275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2275 {
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

type ConfigPaths2275 = Paths2275<NestedConfig2275>;

interface HeavyProps2275 {
  config: DeepPartial2275<NestedConfig2275>;
  path?: ConfigPaths2275;
}

const HeavyComponent2275 = memo(function HeavyComponent2275({ config }: HeavyProps2275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2275.displayName = 'HeavyComponent2275';
export default HeavyComponent2275;
