'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14040<T> = T extends (infer U)[]
  ? DeepReadonlyArray14040<U>
  : T extends object
  ? DeepReadonlyObject14040<T>
  : T;

interface DeepReadonlyArray14040<T> extends ReadonlyArray<DeepReadonly14040<T>> {}

type DeepReadonlyObject14040<T> = {
  readonly [P in keyof T]: DeepReadonly14040<T[P]>;
};

type UnionToIntersection14040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14040<T> = UnionToIntersection14040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14040<T extends unknown[], V> = [...T, V];

type TuplifyUnion14040<T, L = LastOf14040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14040<TuplifyUnion14040<Exclude<T, L>>, L>;

type DeepPartial14040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14040<T[P]> }
  : T;

type Paths14040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14040<K, Paths14040<T[K], Prev14040[D]>> : never }[keyof T]
  : never;

type Prev14040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14040 {
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

type ConfigPaths14040 = Paths14040<NestedConfig14040>;

interface HeavyProps14040 {
  config: DeepPartial14040<NestedConfig14040>;
  path?: ConfigPaths14040;
}

const HeavyComponent14040 = memo(function HeavyComponent14040({ config }: HeavyProps14040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14040.displayName = 'HeavyComponent14040';
export default HeavyComponent14040;
