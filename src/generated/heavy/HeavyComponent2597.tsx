'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2597<T> = T extends (infer U)[]
  ? DeepReadonlyArray2597<U>
  : T extends object
  ? DeepReadonlyObject2597<T>
  : T;

interface DeepReadonlyArray2597<T> extends ReadonlyArray<DeepReadonly2597<T>> {}

type DeepReadonlyObject2597<T> = {
  readonly [P in keyof T]: DeepReadonly2597<T[P]>;
};

type UnionToIntersection2597<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2597<T> = UnionToIntersection2597<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2597<T extends unknown[], V> = [...T, V];

type TuplifyUnion2597<T, L = LastOf2597<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2597<TuplifyUnion2597<Exclude<T, L>>, L>;

type DeepPartial2597<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2597<T[P]> }
  : T;

type Paths2597<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2597<K, Paths2597<T[K], Prev2597[D]>> : never }[keyof T]
  : never;

type Prev2597 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2597<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2597 {
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

type ConfigPaths2597 = Paths2597<NestedConfig2597>;

interface HeavyProps2597 {
  config: DeepPartial2597<NestedConfig2597>;
  path?: ConfigPaths2597;
}

const HeavyComponent2597 = memo(function HeavyComponent2597({ config }: HeavyProps2597) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2597) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2597 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2597: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2597.displayName = 'HeavyComponent2597';
export default HeavyComponent2597;
