'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2496<T> = T extends (infer U)[]
  ? DeepReadonlyArray2496<U>
  : T extends object
  ? DeepReadonlyObject2496<T>
  : T;

interface DeepReadonlyArray2496<T> extends ReadonlyArray<DeepReadonly2496<T>> {}

type DeepReadonlyObject2496<T> = {
  readonly [P in keyof T]: DeepReadonly2496<T[P]>;
};

type UnionToIntersection2496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2496<T> = UnionToIntersection2496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2496<T extends unknown[], V> = [...T, V];

type TuplifyUnion2496<T, L = LastOf2496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2496<TuplifyUnion2496<Exclude<T, L>>, L>;

type DeepPartial2496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2496<T[P]> }
  : T;

type Paths2496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2496<K, Paths2496<T[K], Prev2496[D]>> : never }[keyof T]
  : never;

type Prev2496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2496 {
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

type ConfigPaths2496 = Paths2496<NestedConfig2496>;

interface HeavyProps2496 {
  config: DeepPartial2496<NestedConfig2496>;
  path?: ConfigPaths2496;
}

const HeavyComponent2496 = memo(function HeavyComponent2496({ config }: HeavyProps2496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2496.displayName = 'HeavyComponent2496';
export default HeavyComponent2496;
