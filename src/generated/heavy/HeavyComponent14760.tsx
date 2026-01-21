'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14760<T> = T extends (infer U)[]
  ? DeepReadonlyArray14760<U>
  : T extends object
  ? DeepReadonlyObject14760<T>
  : T;

interface DeepReadonlyArray14760<T> extends ReadonlyArray<DeepReadonly14760<T>> {}

type DeepReadonlyObject14760<T> = {
  readonly [P in keyof T]: DeepReadonly14760<T[P]>;
};

type UnionToIntersection14760<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14760<T> = UnionToIntersection14760<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14760<T extends unknown[], V> = [...T, V];

type TuplifyUnion14760<T, L = LastOf14760<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14760<TuplifyUnion14760<Exclude<T, L>>, L>;

type DeepPartial14760<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14760<T[P]> }
  : T;

type Paths14760<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14760<K, Paths14760<T[K], Prev14760[D]>> : never }[keyof T]
  : never;

type Prev14760 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14760<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14760 {
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

type ConfigPaths14760 = Paths14760<NestedConfig14760>;

interface HeavyProps14760 {
  config: DeepPartial14760<NestedConfig14760>;
  path?: ConfigPaths14760;
}

const HeavyComponent14760 = memo(function HeavyComponent14760({ config }: HeavyProps14760) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14760) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14760 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14760: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14760.displayName = 'HeavyComponent14760';
export default HeavyComponent14760;
