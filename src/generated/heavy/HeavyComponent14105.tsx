'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14105<T> = T extends (infer U)[]
  ? DeepReadonlyArray14105<U>
  : T extends object
  ? DeepReadonlyObject14105<T>
  : T;

interface DeepReadonlyArray14105<T> extends ReadonlyArray<DeepReadonly14105<T>> {}

type DeepReadonlyObject14105<T> = {
  readonly [P in keyof T]: DeepReadonly14105<T[P]>;
};

type UnionToIntersection14105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14105<T> = UnionToIntersection14105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14105<T extends unknown[], V> = [...T, V];

type TuplifyUnion14105<T, L = LastOf14105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14105<TuplifyUnion14105<Exclude<T, L>>, L>;

type DeepPartial14105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14105<T[P]> }
  : T;

type Paths14105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14105<K, Paths14105<T[K], Prev14105[D]>> : never }[keyof T]
  : never;

type Prev14105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14105 {
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

type ConfigPaths14105 = Paths14105<NestedConfig14105>;

interface HeavyProps14105 {
  config: DeepPartial14105<NestedConfig14105>;
  path?: ConfigPaths14105;
}

const HeavyComponent14105 = memo(function HeavyComponent14105({ config }: HeavyProps14105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14105.displayName = 'HeavyComponent14105';
export default HeavyComponent14105;
