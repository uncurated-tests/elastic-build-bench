'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14151<T> = T extends (infer U)[]
  ? DeepReadonlyArray14151<U>
  : T extends object
  ? DeepReadonlyObject14151<T>
  : T;

interface DeepReadonlyArray14151<T> extends ReadonlyArray<DeepReadonly14151<T>> {}

type DeepReadonlyObject14151<T> = {
  readonly [P in keyof T]: DeepReadonly14151<T[P]>;
};

type UnionToIntersection14151<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14151<T> = UnionToIntersection14151<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14151<T extends unknown[], V> = [...T, V];

type TuplifyUnion14151<T, L = LastOf14151<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14151<TuplifyUnion14151<Exclude<T, L>>, L>;

type DeepPartial14151<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14151<T[P]> }
  : T;

type Paths14151<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14151<K, Paths14151<T[K], Prev14151[D]>> : never }[keyof T]
  : never;

type Prev14151 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14151<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14151 {
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

type ConfigPaths14151 = Paths14151<NestedConfig14151>;

interface HeavyProps14151 {
  config: DeepPartial14151<NestedConfig14151>;
  path?: ConfigPaths14151;
}

const HeavyComponent14151 = memo(function HeavyComponent14151({ config }: HeavyProps14151) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14151) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14151 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14151: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14151.displayName = 'HeavyComponent14151';
export default HeavyComponent14151;
