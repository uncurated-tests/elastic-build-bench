'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14354<T> = T extends (infer U)[]
  ? DeepReadonlyArray14354<U>
  : T extends object
  ? DeepReadonlyObject14354<T>
  : T;

interface DeepReadonlyArray14354<T> extends ReadonlyArray<DeepReadonly14354<T>> {}

type DeepReadonlyObject14354<T> = {
  readonly [P in keyof T]: DeepReadonly14354<T[P]>;
};

type UnionToIntersection14354<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14354<T> = UnionToIntersection14354<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14354<T extends unknown[], V> = [...T, V];

type TuplifyUnion14354<T, L = LastOf14354<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14354<TuplifyUnion14354<Exclude<T, L>>, L>;

type DeepPartial14354<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14354<T[P]> }
  : T;

type Paths14354<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14354<K, Paths14354<T[K], Prev14354[D]>> : never }[keyof T]
  : never;

type Prev14354 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14354<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14354 {
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

type ConfigPaths14354 = Paths14354<NestedConfig14354>;

interface HeavyProps14354 {
  config: DeepPartial14354<NestedConfig14354>;
  path?: ConfigPaths14354;
}

const HeavyComponent14354 = memo(function HeavyComponent14354({ config }: HeavyProps14354) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14354) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14354 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14354: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14354.displayName = 'HeavyComponent14354';
export default HeavyComponent14354;
