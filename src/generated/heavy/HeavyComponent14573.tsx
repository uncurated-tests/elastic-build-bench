'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14573<T> = T extends (infer U)[]
  ? DeepReadonlyArray14573<U>
  : T extends object
  ? DeepReadonlyObject14573<T>
  : T;

interface DeepReadonlyArray14573<T> extends ReadonlyArray<DeepReadonly14573<T>> {}

type DeepReadonlyObject14573<T> = {
  readonly [P in keyof T]: DeepReadonly14573<T[P]>;
};

type UnionToIntersection14573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14573<T> = UnionToIntersection14573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14573<T extends unknown[], V> = [...T, V];

type TuplifyUnion14573<T, L = LastOf14573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14573<TuplifyUnion14573<Exclude<T, L>>, L>;

type DeepPartial14573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14573<T[P]> }
  : T;

type Paths14573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14573<K, Paths14573<T[K], Prev14573[D]>> : never }[keyof T]
  : never;

type Prev14573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14573 {
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

type ConfigPaths14573 = Paths14573<NestedConfig14573>;

interface HeavyProps14573 {
  config: DeepPartial14573<NestedConfig14573>;
  path?: ConfigPaths14573;
}

const HeavyComponent14573 = memo(function HeavyComponent14573({ config }: HeavyProps14573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14573.displayName = 'HeavyComponent14573';
export default HeavyComponent14573;
