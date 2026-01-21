'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14082<T> = T extends (infer U)[]
  ? DeepReadonlyArray14082<U>
  : T extends object
  ? DeepReadonlyObject14082<T>
  : T;

interface DeepReadonlyArray14082<T> extends ReadonlyArray<DeepReadonly14082<T>> {}

type DeepReadonlyObject14082<T> = {
  readonly [P in keyof T]: DeepReadonly14082<T[P]>;
};

type UnionToIntersection14082<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14082<T> = UnionToIntersection14082<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14082<T extends unknown[], V> = [...T, V];

type TuplifyUnion14082<T, L = LastOf14082<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14082<TuplifyUnion14082<Exclude<T, L>>, L>;

type DeepPartial14082<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14082<T[P]> }
  : T;

type Paths14082<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14082<K, Paths14082<T[K], Prev14082[D]>> : never }[keyof T]
  : never;

type Prev14082 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14082<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14082 {
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

type ConfigPaths14082 = Paths14082<NestedConfig14082>;

interface HeavyProps14082 {
  config: DeepPartial14082<NestedConfig14082>;
  path?: ConfigPaths14082;
}

const HeavyComponent14082 = memo(function HeavyComponent14082({ config }: HeavyProps14082) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14082) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14082 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14082: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14082.displayName = 'HeavyComponent14082';
export default HeavyComponent14082;
