'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2213<T> = T extends (infer U)[]
  ? DeepReadonlyArray2213<U>
  : T extends object
  ? DeepReadonlyObject2213<T>
  : T;

interface DeepReadonlyArray2213<T> extends ReadonlyArray<DeepReadonly2213<T>> {}

type DeepReadonlyObject2213<T> = {
  readonly [P in keyof T]: DeepReadonly2213<T[P]>;
};

type UnionToIntersection2213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2213<T> = UnionToIntersection2213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2213<T extends unknown[], V> = [...T, V];

type TuplifyUnion2213<T, L = LastOf2213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2213<TuplifyUnion2213<Exclude<T, L>>, L>;

type DeepPartial2213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2213<T[P]> }
  : T;

type Paths2213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2213<K, Paths2213<T[K], Prev2213[D]>> : never }[keyof T]
  : never;

type Prev2213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2213 {
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

type ConfigPaths2213 = Paths2213<NestedConfig2213>;

interface HeavyProps2213 {
  config: DeepPartial2213<NestedConfig2213>;
  path?: ConfigPaths2213;
}

const HeavyComponent2213 = memo(function HeavyComponent2213({ config }: HeavyProps2213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2213.displayName = 'HeavyComponent2213';
export default HeavyComponent2213;
