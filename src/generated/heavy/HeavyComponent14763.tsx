'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14763<T> = T extends (infer U)[]
  ? DeepReadonlyArray14763<U>
  : T extends object
  ? DeepReadonlyObject14763<T>
  : T;

interface DeepReadonlyArray14763<T> extends ReadonlyArray<DeepReadonly14763<T>> {}

type DeepReadonlyObject14763<T> = {
  readonly [P in keyof T]: DeepReadonly14763<T[P]>;
};

type UnionToIntersection14763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14763<T> = UnionToIntersection14763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14763<T extends unknown[], V> = [...T, V];

type TuplifyUnion14763<T, L = LastOf14763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14763<TuplifyUnion14763<Exclude<T, L>>, L>;

type DeepPartial14763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14763<T[P]> }
  : T;

type Paths14763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14763<K, Paths14763<T[K], Prev14763[D]>> : never }[keyof T]
  : never;

type Prev14763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14763 {
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

type ConfigPaths14763 = Paths14763<NestedConfig14763>;

interface HeavyProps14763 {
  config: DeepPartial14763<NestedConfig14763>;
  path?: ConfigPaths14763;
}

const HeavyComponent14763 = memo(function HeavyComponent14763({ config }: HeavyProps14763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14763.displayName = 'HeavyComponent14763';
export default HeavyComponent14763;
