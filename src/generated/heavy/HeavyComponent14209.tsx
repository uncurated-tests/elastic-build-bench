'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14209<T> = T extends (infer U)[]
  ? DeepReadonlyArray14209<U>
  : T extends object
  ? DeepReadonlyObject14209<T>
  : T;

interface DeepReadonlyArray14209<T> extends ReadonlyArray<DeepReadonly14209<T>> {}

type DeepReadonlyObject14209<T> = {
  readonly [P in keyof T]: DeepReadonly14209<T[P]>;
};

type UnionToIntersection14209<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14209<T> = UnionToIntersection14209<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14209<T extends unknown[], V> = [...T, V];

type TuplifyUnion14209<T, L = LastOf14209<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14209<TuplifyUnion14209<Exclude<T, L>>, L>;

type DeepPartial14209<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14209<T[P]> }
  : T;

type Paths14209<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14209<K, Paths14209<T[K], Prev14209[D]>> : never }[keyof T]
  : never;

type Prev14209 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14209<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14209 {
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

type ConfigPaths14209 = Paths14209<NestedConfig14209>;

interface HeavyProps14209 {
  config: DeepPartial14209<NestedConfig14209>;
  path?: ConfigPaths14209;
}

const HeavyComponent14209 = memo(function HeavyComponent14209({ config }: HeavyProps14209) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14209) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14209 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14209: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14209.displayName = 'HeavyComponent14209';
export default HeavyComponent14209;
