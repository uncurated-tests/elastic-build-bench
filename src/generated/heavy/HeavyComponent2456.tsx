'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2456<T> = T extends (infer U)[]
  ? DeepReadonlyArray2456<U>
  : T extends object
  ? DeepReadonlyObject2456<T>
  : T;

interface DeepReadonlyArray2456<T> extends ReadonlyArray<DeepReadonly2456<T>> {}

type DeepReadonlyObject2456<T> = {
  readonly [P in keyof T]: DeepReadonly2456<T[P]>;
};

type UnionToIntersection2456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2456<T> = UnionToIntersection2456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2456<T extends unknown[], V> = [...T, V];

type TuplifyUnion2456<T, L = LastOf2456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2456<TuplifyUnion2456<Exclude<T, L>>, L>;

type DeepPartial2456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2456<T[P]> }
  : T;

type Paths2456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2456<K, Paths2456<T[K], Prev2456[D]>> : never }[keyof T]
  : never;

type Prev2456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2456 {
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

type ConfigPaths2456 = Paths2456<NestedConfig2456>;

interface HeavyProps2456 {
  config: DeepPartial2456<NestedConfig2456>;
  path?: ConfigPaths2456;
}

const HeavyComponent2456 = memo(function HeavyComponent2456({ config }: HeavyProps2456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2456.displayName = 'HeavyComponent2456';
export default HeavyComponent2456;
