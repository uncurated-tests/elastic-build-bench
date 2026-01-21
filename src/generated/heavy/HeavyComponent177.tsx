'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly177<T> = T extends (infer U)[]
  ? DeepReadonlyArray177<U>
  : T extends object
  ? DeepReadonlyObject177<T>
  : T;

interface DeepReadonlyArray177<T> extends ReadonlyArray<DeepReadonly177<T>> {}

type DeepReadonlyObject177<T> = {
  readonly [P in keyof T]: DeepReadonly177<T[P]>;
};

type UnionToIntersection177<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf177<T> = UnionToIntersection177<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push177<T extends unknown[], V> = [...T, V];

type TuplifyUnion177<T, L = LastOf177<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push177<TuplifyUnion177<Exclude<T, L>>, L>;

type DeepPartial177<T> = T extends object
  ? { [P in keyof T]?: DeepPartial177<T[P]> }
  : T;

type Paths177<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join177<K, Paths177<T[K], Prev177[D]>> : never }[keyof T]
  : never;

type Prev177 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join177<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig177 {
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

type ConfigPaths177 = Paths177<NestedConfig177>;

interface HeavyProps177 {
  config: DeepPartial177<NestedConfig177>;
  path?: ConfigPaths177;
}

const HeavyComponent177 = memo(function HeavyComponent177({ config }: HeavyProps177) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 177) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-177 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H177: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent177.displayName = 'HeavyComponent177';
export default HeavyComponent177;
