'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2537<T> = T extends (infer U)[]
  ? DeepReadonlyArray2537<U>
  : T extends object
  ? DeepReadonlyObject2537<T>
  : T;

interface DeepReadonlyArray2537<T> extends ReadonlyArray<DeepReadonly2537<T>> {}

type DeepReadonlyObject2537<T> = {
  readonly [P in keyof T]: DeepReadonly2537<T[P]>;
};

type UnionToIntersection2537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2537<T> = UnionToIntersection2537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2537<T extends unknown[], V> = [...T, V];

type TuplifyUnion2537<T, L = LastOf2537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2537<TuplifyUnion2537<Exclude<T, L>>, L>;

type DeepPartial2537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2537<T[P]> }
  : T;

type Paths2537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2537<K, Paths2537<T[K], Prev2537[D]>> : never }[keyof T]
  : never;

type Prev2537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2537 {
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

type ConfigPaths2537 = Paths2537<NestedConfig2537>;

interface HeavyProps2537 {
  config: DeepPartial2537<NestedConfig2537>;
  path?: ConfigPaths2537;
}

const HeavyComponent2537 = memo(function HeavyComponent2537({ config }: HeavyProps2537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2537.displayName = 'HeavyComponent2537';
export default HeavyComponent2537;
