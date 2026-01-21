'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14985<T> = T extends (infer U)[]
  ? DeepReadonlyArray14985<U>
  : T extends object
  ? DeepReadonlyObject14985<T>
  : T;

interface DeepReadonlyArray14985<T> extends ReadonlyArray<DeepReadonly14985<T>> {}

type DeepReadonlyObject14985<T> = {
  readonly [P in keyof T]: DeepReadonly14985<T[P]>;
};

type UnionToIntersection14985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14985<T> = UnionToIntersection14985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14985<T extends unknown[], V> = [...T, V];

type TuplifyUnion14985<T, L = LastOf14985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14985<TuplifyUnion14985<Exclude<T, L>>, L>;

type DeepPartial14985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14985<T[P]> }
  : T;

type Paths14985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14985<K, Paths14985<T[K], Prev14985[D]>> : never }[keyof T]
  : never;

type Prev14985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14985 {
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

type ConfigPaths14985 = Paths14985<NestedConfig14985>;

interface HeavyProps14985 {
  config: DeepPartial14985<NestedConfig14985>;
  path?: ConfigPaths14985;
}

const HeavyComponent14985 = memo(function HeavyComponent14985({ config }: HeavyProps14985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14985.displayName = 'HeavyComponent14985';
export default HeavyComponent14985;
