'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14897<T> = T extends (infer U)[]
  ? DeepReadonlyArray14897<U>
  : T extends object
  ? DeepReadonlyObject14897<T>
  : T;

interface DeepReadonlyArray14897<T> extends ReadonlyArray<DeepReadonly14897<T>> {}

type DeepReadonlyObject14897<T> = {
  readonly [P in keyof T]: DeepReadonly14897<T[P]>;
};

type UnionToIntersection14897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14897<T> = UnionToIntersection14897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14897<T extends unknown[], V> = [...T, V];

type TuplifyUnion14897<T, L = LastOf14897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14897<TuplifyUnion14897<Exclude<T, L>>, L>;

type DeepPartial14897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14897<T[P]> }
  : T;

type Paths14897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14897<K, Paths14897<T[K], Prev14897[D]>> : never }[keyof T]
  : never;

type Prev14897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14897 {
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

type ConfigPaths14897 = Paths14897<NestedConfig14897>;

interface HeavyProps14897 {
  config: DeepPartial14897<NestedConfig14897>;
  path?: ConfigPaths14897;
}

const HeavyComponent14897 = memo(function HeavyComponent14897({ config }: HeavyProps14897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14897.displayName = 'HeavyComponent14897';
export default HeavyComponent14897;
