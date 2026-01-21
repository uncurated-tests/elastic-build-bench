'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14848<T> = T extends (infer U)[]
  ? DeepReadonlyArray14848<U>
  : T extends object
  ? DeepReadonlyObject14848<T>
  : T;

interface DeepReadonlyArray14848<T> extends ReadonlyArray<DeepReadonly14848<T>> {}

type DeepReadonlyObject14848<T> = {
  readonly [P in keyof T]: DeepReadonly14848<T[P]>;
};

type UnionToIntersection14848<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14848<T> = UnionToIntersection14848<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14848<T extends unknown[], V> = [...T, V];

type TuplifyUnion14848<T, L = LastOf14848<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14848<TuplifyUnion14848<Exclude<T, L>>, L>;

type DeepPartial14848<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14848<T[P]> }
  : T;

type Paths14848<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14848<K, Paths14848<T[K], Prev14848[D]>> : never }[keyof T]
  : never;

type Prev14848 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14848<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14848 {
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

type ConfigPaths14848 = Paths14848<NestedConfig14848>;

interface HeavyProps14848 {
  config: DeepPartial14848<NestedConfig14848>;
  path?: ConfigPaths14848;
}

const HeavyComponent14848 = memo(function HeavyComponent14848({ config }: HeavyProps14848) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14848) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14848 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14848: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14848.displayName = 'HeavyComponent14848';
export default HeavyComponent14848;
