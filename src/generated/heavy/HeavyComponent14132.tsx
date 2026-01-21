'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14132<T> = T extends (infer U)[]
  ? DeepReadonlyArray14132<U>
  : T extends object
  ? DeepReadonlyObject14132<T>
  : T;

interface DeepReadonlyArray14132<T> extends ReadonlyArray<DeepReadonly14132<T>> {}

type DeepReadonlyObject14132<T> = {
  readonly [P in keyof T]: DeepReadonly14132<T[P]>;
};

type UnionToIntersection14132<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14132<T> = UnionToIntersection14132<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14132<T extends unknown[], V> = [...T, V];

type TuplifyUnion14132<T, L = LastOf14132<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14132<TuplifyUnion14132<Exclude<T, L>>, L>;

type DeepPartial14132<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14132<T[P]> }
  : T;

type Paths14132<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14132<K, Paths14132<T[K], Prev14132[D]>> : never }[keyof T]
  : never;

type Prev14132 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14132<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14132 {
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

type ConfigPaths14132 = Paths14132<NestedConfig14132>;

interface HeavyProps14132 {
  config: DeepPartial14132<NestedConfig14132>;
  path?: ConfigPaths14132;
}

const HeavyComponent14132 = memo(function HeavyComponent14132({ config }: HeavyProps14132) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14132) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14132 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14132: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14132.displayName = 'HeavyComponent14132';
export default HeavyComponent14132;
