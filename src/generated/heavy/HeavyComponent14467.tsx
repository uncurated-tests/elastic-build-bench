'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14467<T> = T extends (infer U)[]
  ? DeepReadonlyArray14467<U>
  : T extends object
  ? DeepReadonlyObject14467<T>
  : T;

interface DeepReadonlyArray14467<T> extends ReadonlyArray<DeepReadonly14467<T>> {}

type DeepReadonlyObject14467<T> = {
  readonly [P in keyof T]: DeepReadonly14467<T[P]>;
};

type UnionToIntersection14467<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14467<T> = UnionToIntersection14467<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14467<T extends unknown[], V> = [...T, V];

type TuplifyUnion14467<T, L = LastOf14467<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14467<TuplifyUnion14467<Exclude<T, L>>, L>;

type DeepPartial14467<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14467<T[P]> }
  : T;

type Paths14467<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14467<K, Paths14467<T[K], Prev14467[D]>> : never }[keyof T]
  : never;

type Prev14467 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14467<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14467 {
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

type ConfigPaths14467 = Paths14467<NestedConfig14467>;

interface HeavyProps14467 {
  config: DeepPartial14467<NestedConfig14467>;
  path?: ConfigPaths14467;
}

const HeavyComponent14467 = memo(function HeavyComponent14467({ config }: HeavyProps14467) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14467) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14467 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14467: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14467.displayName = 'HeavyComponent14467';
export default HeavyComponent14467;
