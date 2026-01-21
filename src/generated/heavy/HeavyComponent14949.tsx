'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14949<T> = T extends (infer U)[]
  ? DeepReadonlyArray14949<U>
  : T extends object
  ? DeepReadonlyObject14949<T>
  : T;

interface DeepReadonlyArray14949<T> extends ReadonlyArray<DeepReadonly14949<T>> {}

type DeepReadonlyObject14949<T> = {
  readonly [P in keyof T]: DeepReadonly14949<T[P]>;
};

type UnionToIntersection14949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14949<T> = UnionToIntersection14949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14949<T extends unknown[], V> = [...T, V];

type TuplifyUnion14949<T, L = LastOf14949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14949<TuplifyUnion14949<Exclude<T, L>>, L>;

type DeepPartial14949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14949<T[P]> }
  : T;

type Paths14949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14949<K, Paths14949<T[K], Prev14949[D]>> : never }[keyof T]
  : never;

type Prev14949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14949 {
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

type ConfigPaths14949 = Paths14949<NestedConfig14949>;

interface HeavyProps14949 {
  config: DeepPartial14949<NestedConfig14949>;
  path?: ConfigPaths14949;
}

const HeavyComponent14949 = memo(function HeavyComponent14949({ config }: HeavyProps14949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14949.displayName = 'HeavyComponent14949';
export default HeavyComponent14949;
