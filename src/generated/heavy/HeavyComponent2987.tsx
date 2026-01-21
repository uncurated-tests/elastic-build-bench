'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2987<T> = T extends (infer U)[]
  ? DeepReadonlyArray2987<U>
  : T extends object
  ? DeepReadonlyObject2987<T>
  : T;

interface DeepReadonlyArray2987<T> extends ReadonlyArray<DeepReadonly2987<T>> {}

type DeepReadonlyObject2987<T> = {
  readonly [P in keyof T]: DeepReadonly2987<T[P]>;
};

type UnionToIntersection2987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2987<T> = UnionToIntersection2987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2987<T extends unknown[], V> = [...T, V];

type TuplifyUnion2987<T, L = LastOf2987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2987<TuplifyUnion2987<Exclude<T, L>>, L>;

type DeepPartial2987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2987<T[P]> }
  : T;

type Paths2987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2987<K, Paths2987<T[K], Prev2987[D]>> : never }[keyof T]
  : never;

type Prev2987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2987 {
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

type ConfigPaths2987 = Paths2987<NestedConfig2987>;

interface HeavyProps2987 {
  config: DeepPartial2987<NestedConfig2987>;
  path?: ConfigPaths2987;
}

const HeavyComponent2987 = memo(function HeavyComponent2987({ config }: HeavyProps2987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2987.displayName = 'HeavyComponent2987';
export default HeavyComponent2987;
