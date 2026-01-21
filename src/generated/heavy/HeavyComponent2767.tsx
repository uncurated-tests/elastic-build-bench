'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2767<T> = T extends (infer U)[]
  ? DeepReadonlyArray2767<U>
  : T extends object
  ? DeepReadonlyObject2767<T>
  : T;

interface DeepReadonlyArray2767<T> extends ReadonlyArray<DeepReadonly2767<T>> {}

type DeepReadonlyObject2767<T> = {
  readonly [P in keyof T]: DeepReadonly2767<T[P]>;
};

type UnionToIntersection2767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2767<T> = UnionToIntersection2767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2767<T extends unknown[], V> = [...T, V];

type TuplifyUnion2767<T, L = LastOf2767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2767<TuplifyUnion2767<Exclude<T, L>>, L>;

type DeepPartial2767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2767<T[P]> }
  : T;

type Paths2767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2767<K, Paths2767<T[K], Prev2767[D]>> : never }[keyof T]
  : never;

type Prev2767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2767 {
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

type ConfigPaths2767 = Paths2767<NestedConfig2767>;

interface HeavyProps2767 {
  config: DeepPartial2767<NestedConfig2767>;
  path?: ConfigPaths2767;
}

const HeavyComponent2767 = memo(function HeavyComponent2767({ config }: HeavyProps2767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2767.displayName = 'HeavyComponent2767';
export default HeavyComponent2767;
