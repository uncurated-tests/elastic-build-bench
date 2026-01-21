'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14021<T> = T extends (infer U)[]
  ? DeepReadonlyArray14021<U>
  : T extends object
  ? DeepReadonlyObject14021<T>
  : T;

interface DeepReadonlyArray14021<T> extends ReadonlyArray<DeepReadonly14021<T>> {}

type DeepReadonlyObject14021<T> = {
  readonly [P in keyof T]: DeepReadonly14021<T[P]>;
};

type UnionToIntersection14021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14021<T> = UnionToIntersection14021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14021<T extends unknown[], V> = [...T, V];

type TuplifyUnion14021<T, L = LastOf14021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14021<TuplifyUnion14021<Exclude<T, L>>, L>;

type DeepPartial14021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14021<T[P]> }
  : T;

type Paths14021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14021<K, Paths14021<T[K], Prev14021[D]>> : never }[keyof T]
  : never;

type Prev14021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14021 {
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

type ConfigPaths14021 = Paths14021<NestedConfig14021>;

interface HeavyProps14021 {
  config: DeepPartial14021<NestedConfig14021>;
  path?: ConfigPaths14021;
}

const HeavyComponent14021 = memo(function HeavyComponent14021({ config }: HeavyProps14021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14021.displayName = 'HeavyComponent14021';
export default HeavyComponent14021;
