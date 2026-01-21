'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14298<T> = T extends (infer U)[]
  ? DeepReadonlyArray14298<U>
  : T extends object
  ? DeepReadonlyObject14298<T>
  : T;

interface DeepReadonlyArray14298<T> extends ReadonlyArray<DeepReadonly14298<T>> {}

type DeepReadonlyObject14298<T> = {
  readonly [P in keyof T]: DeepReadonly14298<T[P]>;
};

type UnionToIntersection14298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14298<T> = UnionToIntersection14298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14298<T extends unknown[], V> = [...T, V];

type TuplifyUnion14298<T, L = LastOf14298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14298<TuplifyUnion14298<Exclude<T, L>>, L>;

type DeepPartial14298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14298<T[P]> }
  : T;

type Paths14298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14298<K, Paths14298<T[K], Prev14298[D]>> : never }[keyof T]
  : never;

type Prev14298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14298 {
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

type ConfigPaths14298 = Paths14298<NestedConfig14298>;

interface HeavyProps14298 {
  config: DeepPartial14298<NestedConfig14298>;
  path?: ConfigPaths14298;
}

const HeavyComponent14298 = memo(function HeavyComponent14298({ config }: HeavyProps14298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14298.displayName = 'HeavyComponent14298';
export default HeavyComponent14298;
