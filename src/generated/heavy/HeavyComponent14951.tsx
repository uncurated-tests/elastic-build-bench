'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14951<T> = T extends (infer U)[]
  ? DeepReadonlyArray14951<U>
  : T extends object
  ? DeepReadonlyObject14951<T>
  : T;

interface DeepReadonlyArray14951<T> extends ReadonlyArray<DeepReadonly14951<T>> {}

type DeepReadonlyObject14951<T> = {
  readonly [P in keyof T]: DeepReadonly14951<T[P]>;
};

type UnionToIntersection14951<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14951<T> = UnionToIntersection14951<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14951<T extends unknown[], V> = [...T, V];

type TuplifyUnion14951<T, L = LastOf14951<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14951<TuplifyUnion14951<Exclude<T, L>>, L>;

type DeepPartial14951<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14951<T[P]> }
  : T;

type Paths14951<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14951<K, Paths14951<T[K], Prev14951[D]>> : never }[keyof T]
  : never;

type Prev14951 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14951<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14951 {
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

type ConfigPaths14951 = Paths14951<NestedConfig14951>;

interface HeavyProps14951 {
  config: DeepPartial14951<NestedConfig14951>;
  path?: ConfigPaths14951;
}

const HeavyComponent14951 = memo(function HeavyComponent14951({ config }: HeavyProps14951) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14951) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14951 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14951: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14951.displayName = 'HeavyComponent14951';
export default HeavyComponent14951;
