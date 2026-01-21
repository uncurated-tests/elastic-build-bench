'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly37<T> = T extends (infer U)[]
  ? DeepReadonlyArray37<U>
  : T extends object
  ? DeepReadonlyObject37<T>
  : T;

interface DeepReadonlyArray37<T> extends ReadonlyArray<DeepReadonly37<T>> {}

type DeepReadonlyObject37<T> = {
  readonly [P in keyof T]: DeepReadonly37<T[P]>;
};

type UnionToIntersection37<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf37<T> = UnionToIntersection37<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push37<T extends unknown[], V> = [...T, V];

type TuplifyUnion37<T, L = LastOf37<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push37<TuplifyUnion37<Exclude<T, L>>, L>;

type DeepPartial37<T> = T extends object
  ? { [P in keyof T]?: DeepPartial37<T[P]> }
  : T;

type Paths37<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join37<K, Paths37<T[K], Prev37[D]>> : never }[keyof T]
  : never;

type Prev37 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join37<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig37 {
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

type ConfigPaths37 = Paths37<NestedConfig37>;

interface HeavyProps37 {
  config: DeepPartial37<NestedConfig37>;
  path?: ConfigPaths37;
}

const HeavyComponent37 = memo(function HeavyComponent37({ config }: HeavyProps37) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 37) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-37 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H37: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent37.displayName = 'HeavyComponent37';
export default HeavyComponent37;
