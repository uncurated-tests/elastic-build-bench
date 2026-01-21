'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14350<T> = T extends (infer U)[]
  ? DeepReadonlyArray14350<U>
  : T extends object
  ? DeepReadonlyObject14350<T>
  : T;

interface DeepReadonlyArray14350<T> extends ReadonlyArray<DeepReadonly14350<T>> {}

type DeepReadonlyObject14350<T> = {
  readonly [P in keyof T]: DeepReadonly14350<T[P]>;
};

type UnionToIntersection14350<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14350<T> = UnionToIntersection14350<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14350<T extends unknown[], V> = [...T, V];

type TuplifyUnion14350<T, L = LastOf14350<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14350<TuplifyUnion14350<Exclude<T, L>>, L>;

type DeepPartial14350<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14350<T[P]> }
  : T;

type Paths14350<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14350<K, Paths14350<T[K], Prev14350[D]>> : never }[keyof T]
  : never;

type Prev14350 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14350<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14350 {
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

type ConfigPaths14350 = Paths14350<NestedConfig14350>;

interface HeavyProps14350 {
  config: DeepPartial14350<NestedConfig14350>;
  path?: ConfigPaths14350;
}

const HeavyComponent14350 = memo(function HeavyComponent14350({ config }: HeavyProps14350) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14350) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14350 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14350: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14350.displayName = 'HeavyComponent14350';
export default HeavyComponent14350;
