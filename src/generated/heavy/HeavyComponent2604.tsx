'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2604<T> = T extends (infer U)[]
  ? DeepReadonlyArray2604<U>
  : T extends object
  ? DeepReadonlyObject2604<T>
  : T;

interface DeepReadonlyArray2604<T> extends ReadonlyArray<DeepReadonly2604<T>> {}

type DeepReadonlyObject2604<T> = {
  readonly [P in keyof T]: DeepReadonly2604<T[P]>;
};

type UnionToIntersection2604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2604<T> = UnionToIntersection2604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2604<T extends unknown[], V> = [...T, V];

type TuplifyUnion2604<T, L = LastOf2604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2604<TuplifyUnion2604<Exclude<T, L>>, L>;

type DeepPartial2604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2604<T[P]> }
  : T;

type Paths2604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2604<K, Paths2604<T[K], Prev2604[D]>> : never }[keyof T]
  : never;

type Prev2604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2604 {
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

type ConfigPaths2604 = Paths2604<NestedConfig2604>;

interface HeavyProps2604 {
  config: DeepPartial2604<NestedConfig2604>;
  path?: ConfigPaths2604;
}

const HeavyComponent2604 = memo(function HeavyComponent2604({ config }: HeavyProps2604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2604.displayName = 'HeavyComponent2604';
export default HeavyComponent2604;
