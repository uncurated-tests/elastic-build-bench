'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14417<T> = T extends (infer U)[]
  ? DeepReadonlyArray14417<U>
  : T extends object
  ? DeepReadonlyObject14417<T>
  : T;

interface DeepReadonlyArray14417<T> extends ReadonlyArray<DeepReadonly14417<T>> {}

type DeepReadonlyObject14417<T> = {
  readonly [P in keyof T]: DeepReadonly14417<T[P]>;
};

type UnionToIntersection14417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14417<T> = UnionToIntersection14417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14417<T extends unknown[], V> = [...T, V];

type TuplifyUnion14417<T, L = LastOf14417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14417<TuplifyUnion14417<Exclude<T, L>>, L>;

type DeepPartial14417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14417<T[P]> }
  : T;

type Paths14417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14417<K, Paths14417<T[K], Prev14417[D]>> : never }[keyof T]
  : never;

type Prev14417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14417 {
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

type ConfigPaths14417 = Paths14417<NestedConfig14417>;

interface HeavyProps14417 {
  config: DeepPartial14417<NestedConfig14417>;
  path?: ConfigPaths14417;
}

const HeavyComponent14417 = memo(function HeavyComponent14417({ config }: HeavyProps14417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14417.displayName = 'HeavyComponent14417';
export default HeavyComponent14417;
