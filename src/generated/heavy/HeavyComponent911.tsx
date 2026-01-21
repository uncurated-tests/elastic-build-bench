'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly911<T> = T extends (infer U)[]
  ? DeepReadonlyArray911<U>
  : T extends object
  ? DeepReadonlyObject911<T>
  : T;

interface DeepReadonlyArray911<T> extends ReadonlyArray<DeepReadonly911<T>> {}

type DeepReadonlyObject911<T> = {
  readonly [P in keyof T]: DeepReadonly911<T[P]>;
};

type UnionToIntersection911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf911<T> = UnionToIntersection911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push911<T extends unknown[], V> = [...T, V];

type TuplifyUnion911<T, L = LastOf911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push911<TuplifyUnion911<Exclude<T, L>>, L>;

type DeepPartial911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial911<T[P]> }
  : T;

type Paths911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join911<K, Paths911<T[K], Prev911[D]>> : never }[keyof T]
  : never;

type Prev911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig911 {
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

type ConfigPaths911 = Paths911<NestedConfig911>;

interface HeavyProps911 {
  config: DeepPartial911<NestedConfig911>;
  path?: ConfigPaths911;
}

const HeavyComponent911 = memo(function HeavyComponent911({ config }: HeavyProps911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent911.displayName = 'HeavyComponent911';
export default HeavyComponent911;
