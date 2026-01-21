'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14204<T> = T extends (infer U)[]
  ? DeepReadonlyArray14204<U>
  : T extends object
  ? DeepReadonlyObject14204<T>
  : T;

interface DeepReadonlyArray14204<T> extends ReadonlyArray<DeepReadonly14204<T>> {}

type DeepReadonlyObject14204<T> = {
  readonly [P in keyof T]: DeepReadonly14204<T[P]>;
};

type UnionToIntersection14204<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14204<T> = UnionToIntersection14204<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14204<T extends unknown[], V> = [...T, V];

type TuplifyUnion14204<T, L = LastOf14204<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14204<TuplifyUnion14204<Exclude<T, L>>, L>;

type DeepPartial14204<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14204<T[P]> }
  : T;

type Paths14204<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14204<K, Paths14204<T[K], Prev14204[D]>> : never }[keyof T]
  : never;

type Prev14204 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14204<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14204 {
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

type ConfigPaths14204 = Paths14204<NestedConfig14204>;

interface HeavyProps14204 {
  config: DeepPartial14204<NestedConfig14204>;
  path?: ConfigPaths14204;
}

const HeavyComponent14204 = memo(function HeavyComponent14204({ config }: HeavyProps14204) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14204) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14204 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14204: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14204.displayName = 'HeavyComponent14204';
export default HeavyComponent14204;
