'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly416<T> = T extends (infer U)[]
  ? DeepReadonlyArray416<U>
  : T extends object
  ? DeepReadonlyObject416<T>
  : T;

interface DeepReadonlyArray416<T> extends ReadonlyArray<DeepReadonly416<T>> {}

type DeepReadonlyObject416<T> = {
  readonly [P in keyof T]: DeepReadonly416<T[P]>;
};

type UnionToIntersection416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf416<T> = UnionToIntersection416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push416<T extends unknown[], V> = [...T, V];

type TuplifyUnion416<T, L = LastOf416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push416<TuplifyUnion416<Exclude<T, L>>, L>;

type DeepPartial416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial416<T[P]> }
  : T;

type Paths416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join416<K, Paths416<T[K], Prev416[D]>> : never }[keyof T]
  : never;

type Prev416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig416 {
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

type ConfigPaths416 = Paths416<NestedConfig416>;

interface HeavyProps416 {
  config: DeepPartial416<NestedConfig416>;
  path?: ConfigPaths416;
}

const HeavyComponent416 = memo(function HeavyComponent416({ config }: HeavyProps416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent416.displayName = 'HeavyComponent416';
export default HeavyComponent416;
