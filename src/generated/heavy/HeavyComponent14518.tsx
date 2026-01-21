'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14518<T> = T extends (infer U)[]
  ? DeepReadonlyArray14518<U>
  : T extends object
  ? DeepReadonlyObject14518<T>
  : T;

interface DeepReadonlyArray14518<T> extends ReadonlyArray<DeepReadonly14518<T>> {}

type DeepReadonlyObject14518<T> = {
  readonly [P in keyof T]: DeepReadonly14518<T[P]>;
};

type UnionToIntersection14518<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14518<T> = UnionToIntersection14518<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14518<T extends unknown[], V> = [...T, V];

type TuplifyUnion14518<T, L = LastOf14518<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14518<TuplifyUnion14518<Exclude<T, L>>, L>;

type DeepPartial14518<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14518<T[P]> }
  : T;

type Paths14518<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14518<K, Paths14518<T[K], Prev14518[D]>> : never }[keyof T]
  : never;

type Prev14518 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14518<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14518 {
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

type ConfigPaths14518 = Paths14518<NestedConfig14518>;

interface HeavyProps14518 {
  config: DeepPartial14518<NestedConfig14518>;
  path?: ConfigPaths14518;
}

const HeavyComponent14518 = memo(function HeavyComponent14518({ config }: HeavyProps14518) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14518) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14518 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14518: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14518.displayName = 'HeavyComponent14518';
export default HeavyComponent14518;
