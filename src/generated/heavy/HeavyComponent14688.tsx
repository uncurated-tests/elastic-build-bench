'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14688<T> = T extends (infer U)[]
  ? DeepReadonlyArray14688<U>
  : T extends object
  ? DeepReadonlyObject14688<T>
  : T;

interface DeepReadonlyArray14688<T> extends ReadonlyArray<DeepReadonly14688<T>> {}

type DeepReadonlyObject14688<T> = {
  readonly [P in keyof T]: DeepReadonly14688<T[P]>;
};

type UnionToIntersection14688<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14688<T> = UnionToIntersection14688<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14688<T extends unknown[], V> = [...T, V];

type TuplifyUnion14688<T, L = LastOf14688<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14688<TuplifyUnion14688<Exclude<T, L>>, L>;

type DeepPartial14688<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14688<T[P]> }
  : T;

type Paths14688<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14688<K, Paths14688<T[K], Prev14688[D]>> : never }[keyof T]
  : never;

type Prev14688 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14688<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14688 {
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

type ConfigPaths14688 = Paths14688<NestedConfig14688>;

interface HeavyProps14688 {
  config: DeepPartial14688<NestedConfig14688>;
  path?: ConfigPaths14688;
}

const HeavyComponent14688 = memo(function HeavyComponent14688({ config }: HeavyProps14688) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14688) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14688 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14688: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14688.displayName = 'HeavyComponent14688';
export default HeavyComponent14688;
