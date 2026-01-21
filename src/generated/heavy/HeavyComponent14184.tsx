'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14184<T> = T extends (infer U)[]
  ? DeepReadonlyArray14184<U>
  : T extends object
  ? DeepReadonlyObject14184<T>
  : T;

interface DeepReadonlyArray14184<T> extends ReadonlyArray<DeepReadonly14184<T>> {}

type DeepReadonlyObject14184<T> = {
  readonly [P in keyof T]: DeepReadonly14184<T[P]>;
};

type UnionToIntersection14184<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14184<T> = UnionToIntersection14184<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14184<T extends unknown[], V> = [...T, V];

type TuplifyUnion14184<T, L = LastOf14184<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14184<TuplifyUnion14184<Exclude<T, L>>, L>;

type DeepPartial14184<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14184<T[P]> }
  : T;

type Paths14184<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14184<K, Paths14184<T[K], Prev14184[D]>> : never }[keyof T]
  : never;

type Prev14184 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14184<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14184 {
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

type ConfigPaths14184 = Paths14184<NestedConfig14184>;

interface HeavyProps14184 {
  config: DeepPartial14184<NestedConfig14184>;
  path?: ConfigPaths14184;
}

const HeavyComponent14184 = memo(function HeavyComponent14184({ config }: HeavyProps14184) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14184) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14184 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14184: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14184.displayName = 'HeavyComponent14184';
export default HeavyComponent14184;
