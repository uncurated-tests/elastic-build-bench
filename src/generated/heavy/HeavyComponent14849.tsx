'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14849<T> = T extends (infer U)[]
  ? DeepReadonlyArray14849<U>
  : T extends object
  ? DeepReadonlyObject14849<T>
  : T;

interface DeepReadonlyArray14849<T> extends ReadonlyArray<DeepReadonly14849<T>> {}

type DeepReadonlyObject14849<T> = {
  readonly [P in keyof T]: DeepReadonly14849<T[P]>;
};

type UnionToIntersection14849<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14849<T> = UnionToIntersection14849<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14849<T extends unknown[], V> = [...T, V];

type TuplifyUnion14849<T, L = LastOf14849<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14849<TuplifyUnion14849<Exclude<T, L>>, L>;

type DeepPartial14849<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14849<T[P]> }
  : T;

type Paths14849<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14849<K, Paths14849<T[K], Prev14849[D]>> : never }[keyof T]
  : never;

type Prev14849 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14849<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14849 {
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

type ConfigPaths14849 = Paths14849<NestedConfig14849>;

interface HeavyProps14849 {
  config: DeepPartial14849<NestedConfig14849>;
  path?: ConfigPaths14849;
}

const HeavyComponent14849 = memo(function HeavyComponent14849({ config }: HeavyProps14849) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14849) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14849 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14849: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14849.displayName = 'HeavyComponent14849';
export default HeavyComponent14849;
