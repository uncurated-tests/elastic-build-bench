'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14362<T> = T extends (infer U)[]
  ? DeepReadonlyArray14362<U>
  : T extends object
  ? DeepReadonlyObject14362<T>
  : T;

interface DeepReadonlyArray14362<T> extends ReadonlyArray<DeepReadonly14362<T>> {}

type DeepReadonlyObject14362<T> = {
  readonly [P in keyof T]: DeepReadonly14362<T[P]>;
};

type UnionToIntersection14362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14362<T> = UnionToIntersection14362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14362<T extends unknown[], V> = [...T, V];

type TuplifyUnion14362<T, L = LastOf14362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14362<TuplifyUnion14362<Exclude<T, L>>, L>;

type DeepPartial14362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14362<T[P]> }
  : T;

type Paths14362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14362<K, Paths14362<T[K], Prev14362[D]>> : never }[keyof T]
  : never;

type Prev14362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14362 {
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

type ConfigPaths14362 = Paths14362<NestedConfig14362>;

interface HeavyProps14362 {
  config: DeepPartial14362<NestedConfig14362>;
  path?: ConfigPaths14362;
}

const HeavyComponent14362 = memo(function HeavyComponent14362({ config }: HeavyProps14362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14362.displayName = 'HeavyComponent14362';
export default HeavyComponent14362;
