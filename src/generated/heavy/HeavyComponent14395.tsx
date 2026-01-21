'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14395<T> = T extends (infer U)[]
  ? DeepReadonlyArray14395<U>
  : T extends object
  ? DeepReadonlyObject14395<T>
  : T;

interface DeepReadonlyArray14395<T> extends ReadonlyArray<DeepReadonly14395<T>> {}

type DeepReadonlyObject14395<T> = {
  readonly [P in keyof T]: DeepReadonly14395<T[P]>;
};

type UnionToIntersection14395<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14395<T> = UnionToIntersection14395<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14395<T extends unknown[], V> = [...T, V];

type TuplifyUnion14395<T, L = LastOf14395<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14395<TuplifyUnion14395<Exclude<T, L>>, L>;

type DeepPartial14395<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14395<T[P]> }
  : T;

type Paths14395<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14395<K, Paths14395<T[K], Prev14395[D]>> : never }[keyof T]
  : never;

type Prev14395 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14395<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14395 {
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

type ConfigPaths14395 = Paths14395<NestedConfig14395>;

interface HeavyProps14395 {
  config: DeepPartial14395<NestedConfig14395>;
  path?: ConfigPaths14395;
}

const HeavyComponent14395 = memo(function HeavyComponent14395({ config }: HeavyProps14395) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14395) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14395 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14395: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14395.displayName = 'HeavyComponent14395';
export default HeavyComponent14395;
