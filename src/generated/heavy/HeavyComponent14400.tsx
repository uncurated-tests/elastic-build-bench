'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14400<T> = T extends (infer U)[]
  ? DeepReadonlyArray14400<U>
  : T extends object
  ? DeepReadonlyObject14400<T>
  : T;

interface DeepReadonlyArray14400<T> extends ReadonlyArray<DeepReadonly14400<T>> {}

type DeepReadonlyObject14400<T> = {
  readonly [P in keyof T]: DeepReadonly14400<T[P]>;
};

type UnionToIntersection14400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14400<T> = UnionToIntersection14400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14400<T extends unknown[], V> = [...T, V];

type TuplifyUnion14400<T, L = LastOf14400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14400<TuplifyUnion14400<Exclude<T, L>>, L>;

type DeepPartial14400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14400<T[P]> }
  : T;

type Paths14400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14400<K, Paths14400<T[K], Prev14400[D]>> : never }[keyof T]
  : never;

type Prev14400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14400 {
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

type ConfigPaths14400 = Paths14400<NestedConfig14400>;

interface HeavyProps14400 {
  config: DeepPartial14400<NestedConfig14400>;
  path?: ConfigPaths14400;
}

const HeavyComponent14400 = memo(function HeavyComponent14400({ config }: HeavyProps14400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14400.displayName = 'HeavyComponent14400';
export default HeavyComponent14400;
