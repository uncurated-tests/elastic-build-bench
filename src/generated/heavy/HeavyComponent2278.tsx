'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2278<T> = T extends (infer U)[]
  ? DeepReadonlyArray2278<U>
  : T extends object
  ? DeepReadonlyObject2278<T>
  : T;

interface DeepReadonlyArray2278<T> extends ReadonlyArray<DeepReadonly2278<T>> {}

type DeepReadonlyObject2278<T> = {
  readonly [P in keyof T]: DeepReadonly2278<T[P]>;
};

type UnionToIntersection2278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2278<T> = UnionToIntersection2278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2278<T extends unknown[], V> = [...T, V];

type TuplifyUnion2278<T, L = LastOf2278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2278<TuplifyUnion2278<Exclude<T, L>>, L>;

type DeepPartial2278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2278<T[P]> }
  : T;

type Paths2278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2278<K, Paths2278<T[K], Prev2278[D]>> : never }[keyof T]
  : never;

type Prev2278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2278 {
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

type ConfigPaths2278 = Paths2278<NestedConfig2278>;

interface HeavyProps2278 {
  config: DeepPartial2278<NestedConfig2278>;
  path?: ConfigPaths2278;
}

const HeavyComponent2278 = memo(function HeavyComponent2278({ config }: HeavyProps2278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2278.displayName = 'HeavyComponent2278';
export default HeavyComponent2278;
