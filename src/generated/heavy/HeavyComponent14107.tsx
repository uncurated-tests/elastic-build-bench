'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14107<T> = T extends (infer U)[]
  ? DeepReadonlyArray14107<U>
  : T extends object
  ? DeepReadonlyObject14107<T>
  : T;

interface DeepReadonlyArray14107<T> extends ReadonlyArray<DeepReadonly14107<T>> {}

type DeepReadonlyObject14107<T> = {
  readonly [P in keyof T]: DeepReadonly14107<T[P]>;
};

type UnionToIntersection14107<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14107<T> = UnionToIntersection14107<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14107<T extends unknown[], V> = [...T, V];

type TuplifyUnion14107<T, L = LastOf14107<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14107<TuplifyUnion14107<Exclude<T, L>>, L>;

type DeepPartial14107<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14107<T[P]> }
  : T;

type Paths14107<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14107<K, Paths14107<T[K], Prev14107[D]>> : never }[keyof T]
  : never;

type Prev14107 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14107<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14107 {
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

type ConfigPaths14107 = Paths14107<NestedConfig14107>;

interface HeavyProps14107 {
  config: DeepPartial14107<NestedConfig14107>;
  path?: ConfigPaths14107;
}

const HeavyComponent14107 = memo(function HeavyComponent14107({ config }: HeavyProps14107) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14107) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14107 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14107: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14107.displayName = 'HeavyComponent14107';
export default HeavyComponent14107;
