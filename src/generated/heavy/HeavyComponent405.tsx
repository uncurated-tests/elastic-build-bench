'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly405<T> = T extends (infer U)[]
  ? DeepReadonlyArray405<U>
  : T extends object
  ? DeepReadonlyObject405<T>
  : T;

interface DeepReadonlyArray405<T> extends ReadonlyArray<DeepReadonly405<T>> {}

type DeepReadonlyObject405<T> = {
  readonly [P in keyof T]: DeepReadonly405<T[P]>;
};

type UnionToIntersection405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf405<T> = UnionToIntersection405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push405<T extends unknown[], V> = [...T, V];

type TuplifyUnion405<T, L = LastOf405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push405<TuplifyUnion405<Exclude<T, L>>, L>;

type DeepPartial405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial405<T[P]> }
  : T;

type Paths405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join405<K, Paths405<T[K], Prev405[D]>> : never }[keyof T]
  : never;

type Prev405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig405 {
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

type ConfigPaths405 = Paths405<NestedConfig405>;

interface HeavyProps405 {
  config: DeepPartial405<NestedConfig405>;
  path?: ConfigPaths405;
}

const HeavyComponent405 = memo(function HeavyComponent405({ config }: HeavyProps405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent405.displayName = 'HeavyComponent405';
export default HeavyComponent405;
