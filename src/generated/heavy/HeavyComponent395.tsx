'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly395<T> = T extends (infer U)[]
  ? DeepReadonlyArray395<U>
  : T extends object
  ? DeepReadonlyObject395<T>
  : T;

interface DeepReadonlyArray395<T> extends ReadonlyArray<DeepReadonly395<T>> {}

type DeepReadonlyObject395<T> = {
  readonly [P in keyof T]: DeepReadonly395<T[P]>;
};

type UnionToIntersection395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf395<T> = UnionToIntersection395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push395<T extends unknown[], V> = [...T, V];

type TuplifyUnion395<T, L = LastOf395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push395<TuplifyUnion395<Exclude<T, L>>, L>;

type DeepPartial395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial395<T[P]> }
  : T;

type Paths395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join395<K, Paths395<T[K], Prev395[D]>> : never }[keyof T]
  : never;

type Prev395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig395 {
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

type ConfigPaths395 = Paths395<NestedConfig395>;

interface HeavyProps395 {
  config: DeepPartial395<NestedConfig395>;
  path?: ConfigPaths395;
}

const HeavyComponent395 = memo(function HeavyComponent395({ config }: HeavyProps395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent395.displayName = 'HeavyComponent395';
export default HeavyComponent395;
