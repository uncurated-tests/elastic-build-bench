'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2743<T> = T extends (infer U)[]
  ? DeepReadonlyArray2743<U>
  : T extends object
  ? DeepReadonlyObject2743<T>
  : T;

interface DeepReadonlyArray2743<T> extends ReadonlyArray<DeepReadonly2743<T>> {}

type DeepReadonlyObject2743<T> = {
  readonly [P in keyof T]: DeepReadonly2743<T[P]>;
};

type UnionToIntersection2743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2743<T> = UnionToIntersection2743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2743<T extends unknown[], V> = [...T, V];

type TuplifyUnion2743<T, L = LastOf2743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2743<TuplifyUnion2743<Exclude<T, L>>, L>;

type DeepPartial2743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2743<T[P]> }
  : T;

type Paths2743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2743<K, Paths2743<T[K], Prev2743[D]>> : never }[keyof T]
  : never;

type Prev2743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2743 {
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

type ConfigPaths2743 = Paths2743<NestedConfig2743>;

interface HeavyProps2743 {
  config: DeepPartial2743<NestedConfig2743>;
  path?: ConfigPaths2743;
}

const HeavyComponent2743 = memo(function HeavyComponent2743({ config }: HeavyProps2743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2743.displayName = 'HeavyComponent2743';
export default HeavyComponent2743;
