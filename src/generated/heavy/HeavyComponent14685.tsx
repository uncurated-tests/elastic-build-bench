'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14685<T> = T extends (infer U)[]
  ? DeepReadonlyArray14685<U>
  : T extends object
  ? DeepReadonlyObject14685<T>
  : T;

interface DeepReadonlyArray14685<T> extends ReadonlyArray<DeepReadonly14685<T>> {}

type DeepReadonlyObject14685<T> = {
  readonly [P in keyof T]: DeepReadonly14685<T[P]>;
};

type UnionToIntersection14685<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14685<T> = UnionToIntersection14685<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14685<T extends unknown[], V> = [...T, V];

type TuplifyUnion14685<T, L = LastOf14685<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14685<TuplifyUnion14685<Exclude<T, L>>, L>;

type DeepPartial14685<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14685<T[P]> }
  : T;

type Paths14685<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14685<K, Paths14685<T[K], Prev14685[D]>> : never }[keyof T]
  : never;

type Prev14685 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14685<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14685 {
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

type ConfigPaths14685 = Paths14685<NestedConfig14685>;

interface HeavyProps14685 {
  config: DeepPartial14685<NestedConfig14685>;
  path?: ConfigPaths14685;
}

const HeavyComponent14685 = memo(function HeavyComponent14685({ config }: HeavyProps14685) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14685) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14685 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14685: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14685.displayName = 'HeavyComponent14685';
export default HeavyComponent14685;
