'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2752<T> = T extends (infer U)[]
  ? DeepReadonlyArray2752<U>
  : T extends object
  ? DeepReadonlyObject2752<T>
  : T;

interface DeepReadonlyArray2752<T> extends ReadonlyArray<DeepReadonly2752<T>> {}

type DeepReadonlyObject2752<T> = {
  readonly [P in keyof T]: DeepReadonly2752<T[P]>;
};

type UnionToIntersection2752<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2752<T> = UnionToIntersection2752<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2752<T extends unknown[], V> = [...T, V];

type TuplifyUnion2752<T, L = LastOf2752<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2752<TuplifyUnion2752<Exclude<T, L>>, L>;

type DeepPartial2752<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2752<T[P]> }
  : T;

type Paths2752<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2752<K, Paths2752<T[K], Prev2752[D]>> : never }[keyof T]
  : never;

type Prev2752 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2752<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2752 {
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

type ConfigPaths2752 = Paths2752<NestedConfig2752>;

interface HeavyProps2752 {
  config: DeepPartial2752<NestedConfig2752>;
  path?: ConfigPaths2752;
}

const HeavyComponent2752 = memo(function HeavyComponent2752({ config }: HeavyProps2752) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2752) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2752 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2752: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2752.displayName = 'HeavyComponent2752';
export default HeavyComponent2752;
