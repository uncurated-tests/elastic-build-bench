'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14983<T> = T extends (infer U)[]
  ? DeepReadonlyArray14983<U>
  : T extends object
  ? DeepReadonlyObject14983<T>
  : T;

interface DeepReadonlyArray14983<T> extends ReadonlyArray<DeepReadonly14983<T>> {}

type DeepReadonlyObject14983<T> = {
  readonly [P in keyof T]: DeepReadonly14983<T[P]>;
};

type UnionToIntersection14983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14983<T> = UnionToIntersection14983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14983<T extends unknown[], V> = [...T, V];

type TuplifyUnion14983<T, L = LastOf14983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14983<TuplifyUnion14983<Exclude<T, L>>, L>;

type DeepPartial14983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14983<T[P]> }
  : T;

type Paths14983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14983<K, Paths14983<T[K], Prev14983[D]>> : never }[keyof T]
  : never;

type Prev14983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14983 {
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

type ConfigPaths14983 = Paths14983<NestedConfig14983>;

interface HeavyProps14983 {
  config: DeepPartial14983<NestedConfig14983>;
  path?: ConfigPaths14983;
}

const HeavyComponent14983 = memo(function HeavyComponent14983({ config }: HeavyProps14983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14983.displayName = 'HeavyComponent14983';
export default HeavyComponent14983;
