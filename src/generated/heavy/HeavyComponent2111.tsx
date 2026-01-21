'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2111<T> = T extends (infer U)[]
  ? DeepReadonlyArray2111<U>
  : T extends object
  ? DeepReadonlyObject2111<T>
  : T;

interface DeepReadonlyArray2111<T> extends ReadonlyArray<DeepReadonly2111<T>> {}

type DeepReadonlyObject2111<T> = {
  readonly [P in keyof T]: DeepReadonly2111<T[P]>;
};

type UnionToIntersection2111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2111<T> = UnionToIntersection2111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2111<T extends unknown[], V> = [...T, V];

type TuplifyUnion2111<T, L = LastOf2111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2111<TuplifyUnion2111<Exclude<T, L>>, L>;

type DeepPartial2111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2111<T[P]> }
  : T;

type Paths2111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2111<K, Paths2111<T[K], Prev2111[D]>> : never }[keyof T]
  : never;

type Prev2111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2111 {
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

type ConfigPaths2111 = Paths2111<NestedConfig2111>;

interface HeavyProps2111 {
  config: DeepPartial2111<NestedConfig2111>;
  path?: ConfigPaths2111;
}

const HeavyComponent2111 = memo(function HeavyComponent2111({ config }: HeavyProps2111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2111.displayName = 'HeavyComponent2111';
export default HeavyComponent2111;
