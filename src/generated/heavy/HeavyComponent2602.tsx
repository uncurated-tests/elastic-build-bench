'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2602<T> = T extends (infer U)[]
  ? DeepReadonlyArray2602<U>
  : T extends object
  ? DeepReadonlyObject2602<T>
  : T;

interface DeepReadonlyArray2602<T> extends ReadonlyArray<DeepReadonly2602<T>> {}

type DeepReadonlyObject2602<T> = {
  readonly [P in keyof T]: DeepReadonly2602<T[P]>;
};

type UnionToIntersection2602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2602<T> = UnionToIntersection2602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2602<T extends unknown[], V> = [...T, V];

type TuplifyUnion2602<T, L = LastOf2602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2602<TuplifyUnion2602<Exclude<T, L>>, L>;

type DeepPartial2602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2602<T[P]> }
  : T;

type Paths2602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2602<K, Paths2602<T[K], Prev2602[D]>> : never }[keyof T]
  : never;

type Prev2602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2602 {
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

type ConfigPaths2602 = Paths2602<NestedConfig2602>;

interface HeavyProps2602 {
  config: DeepPartial2602<NestedConfig2602>;
  path?: ConfigPaths2602;
}

const HeavyComponent2602 = memo(function HeavyComponent2602({ config }: HeavyProps2602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2602.displayName = 'HeavyComponent2602';
export default HeavyComponent2602;
