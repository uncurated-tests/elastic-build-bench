'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14620<T> = T extends (infer U)[]
  ? DeepReadonlyArray14620<U>
  : T extends object
  ? DeepReadonlyObject14620<T>
  : T;

interface DeepReadonlyArray14620<T> extends ReadonlyArray<DeepReadonly14620<T>> {}

type DeepReadonlyObject14620<T> = {
  readonly [P in keyof T]: DeepReadonly14620<T[P]>;
};

type UnionToIntersection14620<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14620<T> = UnionToIntersection14620<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14620<T extends unknown[], V> = [...T, V];

type TuplifyUnion14620<T, L = LastOf14620<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14620<TuplifyUnion14620<Exclude<T, L>>, L>;

type DeepPartial14620<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14620<T[P]> }
  : T;

type Paths14620<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14620<K, Paths14620<T[K], Prev14620[D]>> : never }[keyof T]
  : never;

type Prev14620 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14620<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14620 {
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

type ConfigPaths14620 = Paths14620<NestedConfig14620>;

interface HeavyProps14620 {
  config: DeepPartial14620<NestedConfig14620>;
  path?: ConfigPaths14620;
}

const HeavyComponent14620 = memo(function HeavyComponent14620({ config }: HeavyProps14620) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14620) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14620 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14620: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14620.displayName = 'HeavyComponent14620';
export default HeavyComponent14620;
