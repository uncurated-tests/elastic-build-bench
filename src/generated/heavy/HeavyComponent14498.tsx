'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14498<T> = T extends (infer U)[]
  ? DeepReadonlyArray14498<U>
  : T extends object
  ? DeepReadonlyObject14498<T>
  : T;

interface DeepReadonlyArray14498<T> extends ReadonlyArray<DeepReadonly14498<T>> {}

type DeepReadonlyObject14498<T> = {
  readonly [P in keyof T]: DeepReadonly14498<T[P]>;
};

type UnionToIntersection14498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14498<T> = UnionToIntersection14498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14498<T extends unknown[], V> = [...T, V];

type TuplifyUnion14498<T, L = LastOf14498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14498<TuplifyUnion14498<Exclude<T, L>>, L>;

type DeepPartial14498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14498<T[P]> }
  : T;

type Paths14498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14498<K, Paths14498<T[K], Prev14498[D]>> : never }[keyof T]
  : never;

type Prev14498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14498 {
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

type ConfigPaths14498 = Paths14498<NestedConfig14498>;

interface HeavyProps14498 {
  config: DeepPartial14498<NestedConfig14498>;
  path?: ConfigPaths14498;
}

const HeavyComponent14498 = memo(function HeavyComponent14498({ config }: HeavyProps14498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14498.displayName = 'HeavyComponent14498';
export default HeavyComponent14498;
