'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly289<T> = T extends (infer U)[]
  ? DeepReadonlyArray289<U>
  : T extends object
  ? DeepReadonlyObject289<T>
  : T;

interface DeepReadonlyArray289<T> extends ReadonlyArray<DeepReadonly289<T>> {}

type DeepReadonlyObject289<T> = {
  readonly [P in keyof T]: DeepReadonly289<T[P]>;
};

type UnionToIntersection289<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf289<T> = UnionToIntersection289<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push289<T extends unknown[], V> = [...T, V];

type TuplifyUnion289<T, L = LastOf289<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push289<TuplifyUnion289<Exclude<T, L>>, L>;

type DeepPartial289<T> = T extends object
  ? { [P in keyof T]?: DeepPartial289<T[P]> }
  : T;

type Paths289<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join289<K, Paths289<T[K], Prev289[D]>> : never }[keyof T]
  : never;

type Prev289 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join289<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig289 {
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

type ConfigPaths289 = Paths289<NestedConfig289>;

interface HeavyProps289 {
  config: DeepPartial289<NestedConfig289>;
  path?: ConfigPaths289;
}

const HeavyComponent289 = memo(function HeavyComponent289({ config }: HeavyProps289) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 289) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-289 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H289: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent289.displayName = 'HeavyComponent289';
export default HeavyComponent289;
