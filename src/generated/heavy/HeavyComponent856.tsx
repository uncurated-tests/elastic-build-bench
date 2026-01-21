'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly856<T> = T extends (infer U)[]
  ? DeepReadonlyArray856<U>
  : T extends object
  ? DeepReadonlyObject856<T>
  : T;

interface DeepReadonlyArray856<T> extends ReadonlyArray<DeepReadonly856<T>> {}

type DeepReadonlyObject856<T> = {
  readonly [P in keyof T]: DeepReadonly856<T[P]>;
};

type UnionToIntersection856<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf856<T> = UnionToIntersection856<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push856<T extends unknown[], V> = [...T, V];

type TuplifyUnion856<T, L = LastOf856<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push856<TuplifyUnion856<Exclude<T, L>>, L>;

type DeepPartial856<T> = T extends object
  ? { [P in keyof T]?: DeepPartial856<T[P]> }
  : T;

type Paths856<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join856<K, Paths856<T[K], Prev856[D]>> : never }[keyof T]
  : never;

type Prev856 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join856<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig856 {
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

type ConfigPaths856 = Paths856<NestedConfig856>;

interface HeavyProps856 {
  config: DeepPartial856<NestedConfig856>;
  path?: ConfigPaths856;
}

const HeavyComponent856 = memo(function HeavyComponent856({ config }: HeavyProps856) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 856) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-856 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H856: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent856.displayName = 'HeavyComponent856';
export default HeavyComponent856;
