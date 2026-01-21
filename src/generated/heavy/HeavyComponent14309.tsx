'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14309<T> = T extends (infer U)[]
  ? DeepReadonlyArray14309<U>
  : T extends object
  ? DeepReadonlyObject14309<T>
  : T;

interface DeepReadonlyArray14309<T> extends ReadonlyArray<DeepReadonly14309<T>> {}

type DeepReadonlyObject14309<T> = {
  readonly [P in keyof T]: DeepReadonly14309<T[P]>;
};

type UnionToIntersection14309<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14309<T> = UnionToIntersection14309<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14309<T extends unknown[], V> = [...T, V];

type TuplifyUnion14309<T, L = LastOf14309<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14309<TuplifyUnion14309<Exclude<T, L>>, L>;

type DeepPartial14309<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14309<T[P]> }
  : T;

type Paths14309<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14309<K, Paths14309<T[K], Prev14309[D]>> : never }[keyof T]
  : never;

type Prev14309 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14309<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14309 {
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

type ConfigPaths14309 = Paths14309<NestedConfig14309>;

interface HeavyProps14309 {
  config: DeepPartial14309<NestedConfig14309>;
  path?: ConfigPaths14309;
}

const HeavyComponent14309 = memo(function HeavyComponent14309({ config }: HeavyProps14309) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14309) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14309 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14309: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14309.displayName = 'HeavyComponent14309';
export default HeavyComponent14309;
