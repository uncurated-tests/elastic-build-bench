'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2365<T> = T extends (infer U)[]
  ? DeepReadonlyArray2365<U>
  : T extends object
  ? DeepReadonlyObject2365<T>
  : T;

interface DeepReadonlyArray2365<T> extends ReadonlyArray<DeepReadonly2365<T>> {}

type DeepReadonlyObject2365<T> = {
  readonly [P in keyof T]: DeepReadonly2365<T[P]>;
};

type UnionToIntersection2365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2365<T> = UnionToIntersection2365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2365<T extends unknown[], V> = [...T, V];

type TuplifyUnion2365<T, L = LastOf2365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2365<TuplifyUnion2365<Exclude<T, L>>, L>;

type DeepPartial2365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2365<T[P]> }
  : T;

type Paths2365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2365<K, Paths2365<T[K], Prev2365[D]>> : never }[keyof T]
  : never;

type Prev2365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2365 {
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

type ConfigPaths2365 = Paths2365<NestedConfig2365>;

interface HeavyProps2365 {
  config: DeepPartial2365<NestedConfig2365>;
  path?: ConfigPaths2365;
}

const HeavyComponent2365 = memo(function HeavyComponent2365({ config }: HeavyProps2365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2365.displayName = 'HeavyComponent2365';
export default HeavyComponent2365;
