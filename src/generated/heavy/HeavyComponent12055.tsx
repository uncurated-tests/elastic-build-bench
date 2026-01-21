'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12055<T> = T extends (infer U)[]
  ? DeepReadonlyArray12055<U>
  : T extends object
  ? DeepReadonlyObject12055<T>
  : T;

interface DeepReadonlyArray12055<T> extends ReadonlyArray<DeepReadonly12055<T>> {}

type DeepReadonlyObject12055<T> = {
  readonly [P in keyof T]: DeepReadonly12055<T[P]>;
};

type UnionToIntersection12055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12055<T> = UnionToIntersection12055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12055<T extends unknown[], V> = [...T, V];

type TuplifyUnion12055<T, L = LastOf12055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12055<TuplifyUnion12055<Exclude<T, L>>, L>;

type DeepPartial12055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12055<T[P]> }
  : T;

type Paths12055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12055<K, Paths12055<T[K], Prev12055[D]>> : never }[keyof T]
  : never;

type Prev12055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12055 {
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

type ConfigPaths12055 = Paths12055<NestedConfig12055>;

interface HeavyProps12055 {
  config: DeepPartial12055<NestedConfig12055>;
  path?: ConfigPaths12055;
}

const HeavyComponent12055 = memo(function HeavyComponent12055({ config }: HeavyProps12055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12055.displayName = 'HeavyComponent12055';
export default HeavyComponent12055;
