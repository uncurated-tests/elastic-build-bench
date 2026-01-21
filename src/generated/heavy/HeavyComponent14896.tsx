'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14896<T> = T extends (infer U)[]
  ? DeepReadonlyArray14896<U>
  : T extends object
  ? DeepReadonlyObject14896<T>
  : T;

interface DeepReadonlyArray14896<T> extends ReadonlyArray<DeepReadonly14896<T>> {}

type DeepReadonlyObject14896<T> = {
  readonly [P in keyof T]: DeepReadonly14896<T[P]>;
};

type UnionToIntersection14896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14896<T> = UnionToIntersection14896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14896<T extends unknown[], V> = [...T, V];

type TuplifyUnion14896<T, L = LastOf14896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14896<TuplifyUnion14896<Exclude<T, L>>, L>;

type DeepPartial14896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14896<T[P]> }
  : T;

type Paths14896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14896<K, Paths14896<T[K], Prev14896[D]>> : never }[keyof T]
  : never;

type Prev14896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14896 {
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

type ConfigPaths14896 = Paths14896<NestedConfig14896>;

interface HeavyProps14896 {
  config: DeepPartial14896<NestedConfig14896>;
  path?: ConfigPaths14896;
}

const HeavyComponent14896 = memo(function HeavyComponent14896({ config }: HeavyProps14896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14896.displayName = 'HeavyComponent14896';
export default HeavyComponent14896;
