'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14008<T> = T extends (infer U)[]
  ? DeepReadonlyArray14008<U>
  : T extends object
  ? DeepReadonlyObject14008<T>
  : T;

interface DeepReadonlyArray14008<T> extends ReadonlyArray<DeepReadonly14008<T>> {}

type DeepReadonlyObject14008<T> = {
  readonly [P in keyof T]: DeepReadonly14008<T[P]>;
};

type UnionToIntersection14008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14008<T> = UnionToIntersection14008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14008<T extends unknown[], V> = [...T, V];

type TuplifyUnion14008<T, L = LastOf14008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14008<TuplifyUnion14008<Exclude<T, L>>, L>;

type DeepPartial14008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14008<T[P]> }
  : T;

type Paths14008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14008<K, Paths14008<T[K], Prev14008[D]>> : never }[keyof T]
  : never;

type Prev14008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14008 {
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

type ConfigPaths14008 = Paths14008<NestedConfig14008>;

interface HeavyProps14008 {
  config: DeepPartial14008<NestedConfig14008>;
  path?: ConfigPaths14008;
}

const HeavyComponent14008 = memo(function HeavyComponent14008({ config }: HeavyProps14008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14008.displayName = 'HeavyComponent14008';
export default HeavyComponent14008;
