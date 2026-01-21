'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14694<T> = T extends (infer U)[]
  ? DeepReadonlyArray14694<U>
  : T extends object
  ? DeepReadonlyObject14694<T>
  : T;

interface DeepReadonlyArray14694<T> extends ReadonlyArray<DeepReadonly14694<T>> {}

type DeepReadonlyObject14694<T> = {
  readonly [P in keyof T]: DeepReadonly14694<T[P]>;
};

type UnionToIntersection14694<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14694<T> = UnionToIntersection14694<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14694<T extends unknown[], V> = [...T, V];

type TuplifyUnion14694<T, L = LastOf14694<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14694<TuplifyUnion14694<Exclude<T, L>>, L>;

type DeepPartial14694<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14694<T[P]> }
  : T;

type Paths14694<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14694<K, Paths14694<T[K], Prev14694[D]>> : never }[keyof T]
  : never;

type Prev14694 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14694<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14694 {
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

type ConfigPaths14694 = Paths14694<NestedConfig14694>;

interface HeavyProps14694 {
  config: DeepPartial14694<NestedConfig14694>;
  path?: ConfigPaths14694;
}

const HeavyComponent14694 = memo(function HeavyComponent14694({ config }: HeavyProps14694) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14694) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14694 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14694: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14694.displayName = 'HeavyComponent14694';
export default HeavyComponent14694;
