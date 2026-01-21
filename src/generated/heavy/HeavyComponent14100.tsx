'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14100<T> = T extends (infer U)[]
  ? DeepReadonlyArray14100<U>
  : T extends object
  ? DeepReadonlyObject14100<T>
  : T;

interface DeepReadonlyArray14100<T> extends ReadonlyArray<DeepReadonly14100<T>> {}

type DeepReadonlyObject14100<T> = {
  readonly [P in keyof T]: DeepReadonly14100<T[P]>;
};

type UnionToIntersection14100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14100<T> = UnionToIntersection14100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14100<T extends unknown[], V> = [...T, V];

type TuplifyUnion14100<T, L = LastOf14100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14100<TuplifyUnion14100<Exclude<T, L>>, L>;

type DeepPartial14100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14100<T[P]> }
  : T;

type Paths14100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14100<K, Paths14100<T[K], Prev14100[D]>> : never }[keyof T]
  : never;

type Prev14100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14100 {
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

type ConfigPaths14100 = Paths14100<NestedConfig14100>;

interface HeavyProps14100 {
  config: DeepPartial14100<NestedConfig14100>;
  path?: ConfigPaths14100;
}

const HeavyComponent14100 = memo(function HeavyComponent14100({ config }: HeavyProps14100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14100.displayName = 'HeavyComponent14100';
export default HeavyComponent14100;
