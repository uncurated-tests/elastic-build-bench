'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2479<T> = T extends (infer U)[]
  ? DeepReadonlyArray2479<U>
  : T extends object
  ? DeepReadonlyObject2479<T>
  : T;

interface DeepReadonlyArray2479<T> extends ReadonlyArray<DeepReadonly2479<T>> {}

type DeepReadonlyObject2479<T> = {
  readonly [P in keyof T]: DeepReadonly2479<T[P]>;
};

type UnionToIntersection2479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2479<T> = UnionToIntersection2479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2479<T extends unknown[], V> = [...T, V];

type TuplifyUnion2479<T, L = LastOf2479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2479<TuplifyUnion2479<Exclude<T, L>>, L>;

type DeepPartial2479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2479<T[P]> }
  : T;

type Paths2479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2479<K, Paths2479<T[K], Prev2479[D]>> : never }[keyof T]
  : never;

type Prev2479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2479 {
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

type ConfigPaths2479 = Paths2479<NestedConfig2479>;

interface HeavyProps2479 {
  config: DeepPartial2479<NestedConfig2479>;
  path?: ConfigPaths2479;
}

const HeavyComponent2479 = memo(function HeavyComponent2479({ config }: HeavyProps2479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2479.displayName = 'HeavyComponent2479';
export default HeavyComponent2479;
