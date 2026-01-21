'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14711<T> = T extends (infer U)[]
  ? DeepReadonlyArray14711<U>
  : T extends object
  ? DeepReadonlyObject14711<T>
  : T;

interface DeepReadonlyArray14711<T> extends ReadonlyArray<DeepReadonly14711<T>> {}

type DeepReadonlyObject14711<T> = {
  readonly [P in keyof T]: DeepReadonly14711<T[P]>;
};

type UnionToIntersection14711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14711<T> = UnionToIntersection14711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14711<T extends unknown[], V> = [...T, V];

type TuplifyUnion14711<T, L = LastOf14711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14711<TuplifyUnion14711<Exclude<T, L>>, L>;

type DeepPartial14711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14711<T[P]> }
  : T;

type Paths14711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14711<K, Paths14711<T[K], Prev14711[D]>> : never }[keyof T]
  : never;

type Prev14711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14711 {
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

type ConfigPaths14711 = Paths14711<NestedConfig14711>;

interface HeavyProps14711 {
  config: DeepPartial14711<NestedConfig14711>;
  path?: ConfigPaths14711;
}

const HeavyComponent14711 = memo(function HeavyComponent14711({ config }: HeavyProps14711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14711.displayName = 'HeavyComponent14711';
export default HeavyComponent14711;
