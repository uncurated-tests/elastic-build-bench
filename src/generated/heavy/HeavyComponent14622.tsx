'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14622<T> = T extends (infer U)[]
  ? DeepReadonlyArray14622<U>
  : T extends object
  ? DeepReadonlyObject14622<T>
  : T;

interface DeepReadonlyArray14622<T> extends ReadonlyArray<DeepReadonly14622<T>> {}

type DeepReadonlyObject14622<T> = {
  readonly [P in keyof T]: DeepReadonly14622<T[P]>;
};

type UnionToIntersection14622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14622<T> = UnionToIntersection14622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14622<T extends unknown[], V> = [...T, V];

type TuplifyUnion14622<T, L = LastOf14622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14622<TuplifyUnion14622<Exclude<T, L>>, L>;

type DeepPartial14622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14622<T[P]> }
  : T;

type Paths14622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14622<K, Paths14622<T[K], Prev14622[D]>> : never }[keyof T]
  : never;

type Prev14622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14622 {
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

type ConfigPaths14622 = Paths14622<NestedConfig14622>;

interface HeavyProps14622 {
  config: DeepPartial14622<NestedConfig14622>;
  path?: ConfigPaths14622;
}

const HeavyComponent14622 = memo(function HeavyComponent14622({ config }: HeavyProps14622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14622.displayName = 'HeavyComponent14622';
export default HeavyComponent14622;
