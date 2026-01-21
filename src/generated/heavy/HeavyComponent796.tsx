'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly796<T> = T extends (infer U)[]
  ? DeepReadonlyArray796<U>
  : T extends object
  ? DeepReadonlyObject796<T>
  : T;

interface DeepReadonlyArray796<T> extends ReadonlyArray<DeepReadonly796<T>> {}

type DeepReadonlyObject796<T> = {
  readonly [P in keyof T]: DeepReadonly796<T[P]>;
};

type UnionToIntersection796<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf796<T> = UnionToIntersection796<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push796<T extends unknown[], V> = [...T, V];

type TuplifyUnion796<T, L = LastOf796<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push796<TuplifyUnion796<Exclude<T, L>>, L>;

type DeepPartial796<T> = T extends object
  ? { [P in keyof T]?: DeepPartial796<T[P]> }
  : T;

type Paths796<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join796<K, Paths796<T[K], Prev796[D]>> : never }[keyof T]
  : never;

type Prev796 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join796<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig796 {
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

type ConfigPaths796 = Paths796<NestedConfig796>;

interface HeavyProps796 {
  config: DeepPartial796<NestedConfig796>;
  path?: ConfigPaths796;
}

const HeavyComponent796 = memo(function HeavyComponent796({ config }: HeavyProps796) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 796) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-796 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H796: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent796.displayName = 'HeavyComponent796';
export default HeavyComponent796;
