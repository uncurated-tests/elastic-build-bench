'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly51<T> = T extends (infer U)[]
  ? DeepReadonlyArray51<U>
  : T extends object
  ? DeepReadonlyObject51<T>
  : T;

interface DeepReadonlyArray51<T> extends ReadonlyArray<DeepReadonly51<T>> {}

type DeepReadonlyObject51<T> = {
  readonly [P in keyof T]: DeepReadonly51<T[P]>;
};

type UnionToIntersection51<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf51<T> = UnionToIntersection51<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push51<T extends unknown[], V> = [...T, V];

type TuplifyUnion51<T, L = LastOf51<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push51<TuplifyUnion51<Exclude<T, L>>, L>;

type DeepPartial51<T> = T extends object
  ? { [P in keyof T]?: DeepPartial51<T[P]> }
  : T;

type Paths51<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join51<K, Paths51<T[K], Prev51[D]>> : never }[keyof T]
  : never;

type Prev51 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join51<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig51 {
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

type ConfigPaths51 = Paths51<NestedConfig51>;

interface HeavyProps51 {
  config: DeepPartial51<NestedConfig51>;
  path?: ConfigPaths51;
}

const HeavyComponent51 = memo(function HeavyComponent51({ config }: HeavyProps51) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 51) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-51 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H51: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent51.displayName = 'HeavyComponent51';
export default HeavyComponent51;
