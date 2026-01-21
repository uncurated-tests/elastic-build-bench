'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14953<T> = T extends (infer U)[]
  ? DeepReadonlyArray14953<U>
  : T extends object
  ? DeepReadonlyObject14953<T>
  : T;

interface DeepReadonlyArray14953<T> extends ReadonlyArray<DeepReadonly14953<T>> {}

type DeepReadonlyObject14953<T> = {
  readonly [P in keyof T]: DeepReadonly14953<T[P]>;
};

type UnionToIntersection14953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14953<T> = UnionToIntersection14953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14953<T extends unknown[], V> = [...T, V];

type TuplifyUnion14953<T, L = LastOf14953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14953<TuplifyUnion14953<Exclude<T, L>>, L>;

type DeepPartial14953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14953<T[P]> }
  : T;

type Paths14953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14953<K, Paths14953<T[K], Prev14953[D]>> : never }[keyof T]
  : never;

type Prev14953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14953 {
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

type ConfigPaths14953 = Paths14953<NestedConfig14953>;

interface HeavyProps14953 {
  config: DeepPartial14953<NestedConfig14953>;
  path?: ConfigPaths14953;
}

const HeavyComponent14953 = memo(function HeavyComponent14953({ config }: HeavyProps14953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14953.displayName = 'HeavyComponent14953';
export default HeavyComponent14953;
