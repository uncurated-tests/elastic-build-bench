'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14435<T> = T extends (infer U)[]
  ? DeepReadonlyArray14435<U>
  : T extends object
  ? DeepReadonlyObject14435<T>
  : T;

interface DeepReadonlyArray14435<T> extends ReadonlyArray<DeepReadonly14435<T>> {}

type DeepReadonlyObject14435<T> = {
  readonly [P in keyof T]: DeepReadonly14435<T[P]>;
};

type UnionToIntersection14435<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14435<T> = UnionToIntersection14435<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14435<T extends unknown[], V> = [...T, V];

type TuplifyUnion14435<T, L = LastOf14435<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14435<TuplifyUnion14435<Exclude<T, L>>, L>;

type DeepPartial14435<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14435<T[P]> }
  : T;

type Paths14435<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14435<K, Paths14435<T[K], Prev14435[D]>> : never }[keyof T]
  : never;

type Prev14435 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14435<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14435 {
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

type ConfigPaths14435 = Paths14435<NestedConfig14435>;

interface HeavyProps14435 {
  config: DeepPartial14435<NestedConfig14435>;
  path?: ConfigPaths14435;
}

const HeavyComponent14435 = memo(function HeavyComponent14435({ config }: HeavyProps14435) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14435) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14435 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14435: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14435.displayName = 'HeavyComponent14435';
export default HeavyComponent14435;
