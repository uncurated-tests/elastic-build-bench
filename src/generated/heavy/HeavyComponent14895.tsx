'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14895<T> = T extends (infer U)[]
  ? DeepReadonlyArray14895<U>
  : T extends object
  ? DeepReadonlyObject14895<T>
  : T;

interface DeepReadonlyArray14895<T> extends ReadonlyArray<DeepReadonly14895<T>> {}

type DeepReadonlyObject14895<T> = {
  readonly [P in keyof T]: DeepReadonly14895<T[P]>;
};

type UnionToIntersection14895<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14895<T> = UnionToIntersection14895<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14895<T extends unknown[], V> = [...T, V];

type TuplifyUnion14895<T, L = LastOf14895<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14895<TuplifyUnion14895<Exclude<T, L>>, L>;

type DeepPartial14895<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14895<T[P]> }
  : T;

type Paths14895<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14895<K, Paths14895<T[K], Prev14895[D]>> : never }[keyof T]
  : never;

type Prev14895 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14895<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14895 {
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

type ConfigPaths14895 = Paths14895<NestedConfig14895>;

interface HeavyProps14895 {
  config: DeepPartial14895<NestedConfig14895>;
  path?: ConfigPaths14895;
}

const HeavyComponent14895 = memo(function HeavyComponent14895({ config }: HeavyProps14895) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14895) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14895 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14895: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14895.displayName = 'HeavyComponent14895';
export default HeavyComponent14895;
