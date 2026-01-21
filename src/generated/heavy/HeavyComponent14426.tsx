'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14426<T> = T extends (infer U)[]
  ? DeepReadonlyArray14426<U>
  : T extends object
  ? DeepReadonlyObject14426<T>
  : T;

interface DeepReadonlyArray14426<T> extends ReadonlyArray<DeepReadonly14426<T>> {}

type DeepReadonlyObject14426<T> = {
  readonly [P in keyof T]: DeepReadonly14426<T[P]>;
};

type UnionToIntersection14426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14426<T> = UnionToIntersection14426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14426<T extends unknown[], V> = [...T, V];

type TuplifyUnion14426<T, L = LastOf14426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14426<TuplifyUnion14426<Exclude<T, L>>, L>;

type DeepPartial14426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14426<T[P]> }
  : T;

type Paths14426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14426<K, Paths14426<T[K], Prev14426[D]>> : never }[keyof T]
  : never;

type Prev14426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14426 {
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

type ConfigPaths14426 = Paths14426<NestedConfig14426>;

interface HeavyProps14426 {
  config: DeepPartial14426<NestedConfig14426>;
  path?: ConfigPaths14426;
}

const HeavyComponent14426 = memo(function HeavyComponent14426({ config }: HeavyProps14426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14426.displayName = 'HeavyComponent14426';
export default HeavyComponent14426;
