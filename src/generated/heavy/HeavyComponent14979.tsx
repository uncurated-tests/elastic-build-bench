'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14979<T> = T extends (infer U)[]
  ? DeepReadonlyArray14979<U>
  : T extends object
  ? DeepReadonlyObject14979<T>
  : T;

interface DeepReadonlyArray14979<T> extends ReadonlyArray<DeepReadonly14979<T>> {}

type DeepReadonlyObject14979<T> = {
  readonly [P in keyof T]: DeepReadonly14979<T[P]>;
};

type UnionToIntersection14979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14979<T> = UnionToIntersection14979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14979<T extends unknown[], V> = [...T, V];

type TuplifyUnion14979<T, L = LastOf14979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14979<TuplifyUnion14979<Exclude<T, L>>, L>;

type DeepPartial14979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14979<T[P]> }
  : T;

type Paths14979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14979<K, Paths14979<T[K], Prev14979[D]>> : never }[keyof T]
  : never;

type Prev14979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14979 {
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

type ConfigPaths14979 = Paths14979<NestedConfig14979>;

interface HeavyProps14979 {
  config: DeepPartial14979<NestedConfig14979>;
  path?: ConfigPaths14979;
}

const HeavyComponent14979 = memo(function HeavyComponent14979({ config }: HeavyProps14979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14979.displayName = 'HeavyComponent14979';
export default HeavyComponent14979;
