'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2100<T> = T extends (infer U)[]
  ? DeepReadonlyArray2100<U>
  : T extends object
  ? DeepReadonlyObject2100<T>
  : T;

interface DeepReadonlyArray2100<T> extends ReadonlyArray<DeepReadonly2100<T>> {}

type DeepReadonlyObject2100<T> = {
  readonly [P in keyof T]: DeepReadonly2100<T[P]>;
};

type UnionToIntersection2100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2100<T> = UnionToIntersection2100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2100<T extends unknown[], V> = [...T, V];

type TuplifyUnion2100<T, L = LastOf2100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2100<TuplifyUnion2100<Exclude<T, L>>, L>;

type DeepPartial2100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2100<T[P]> }
  : T;

type Paths2100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2100<K, Paths2100<T[K], Prev2100[D]>> : never }[keyof T]
  : never;

type Prev2100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2100 {
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

type ConfigPaths2100 = Paths2100<NestedConfig2100>;

interface HeavyProps2100 {
  config: DeepPartial2100<NestedConfig2100>;
  path?: ConfigPaths2100;
}

const HeavyComponent2100 = memo(function HeavyComponent2100({ config }: HeavyProps2100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2100.displayName = 'HeavyComponent2100';
export default HeavyComponent2100;
