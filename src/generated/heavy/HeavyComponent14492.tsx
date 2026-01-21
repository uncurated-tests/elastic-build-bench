'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14492<T> = T extends (infer U)[]
  ? DeepReadonlyArray14492<U>
  : T extends object
  ? DeepReadonlyObject14492<T>
  : T;

interface DeepReadonlyArray14492<T> extends ReadonlyArray<DeepReadonly14492<T>> {}

type DeepReadonlyObject14492<T> = {
  readonly [P in keyof T]: DeepReadonly14492<T[P]>;
};

type UnionToIntersection14492<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14492<T> = UnionToIntersection14492<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14492<T extends unknown[], V> = [...T, V];

type TuplifyUnion14492<T, L = LastOf14492<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14492<TuplifyUnion14492<Exclude<T, L>>, L>;

type DeepPartial14492<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14492<T[P]> }
  : T;

type Paths14492<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14492<K, Paths14492<T[K], Prev14492[D]>> : never }[keyof T]
  : never;

type Prev14492 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14492<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14492 {
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

type ConfigPaths14492 = Paths14492<NestedConfig14492>;

interface HeavyProps14492 {
  config: DeepPartial14492<NestedConfig14492>;
  path?: ConfigPaths14492;
}

const HeavyComponent14492 = memo(function HeavyComponent14492({ config }: HeavyProps14492) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14492) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14492 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14492: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14492.displayName = 'HeavyComponent14492';
export default HeavyComponent14492;
