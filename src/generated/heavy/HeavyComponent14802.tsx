'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14802<T> = T extends (infer U)[]
  ? DeepReadonlyArray14802<U>
  : T extends object
  ? DeepReadonlyObject14802<T>
  : T;

interface DeepReadonlyArray14802<T> extends ReadonlyArray<DeepReadonly14802<T>> {}

type DeepReadonlyObject14802<T> = {
  readonly [P in keyof T]: DeepReadonly14802<T[P]>;
};

type UnionToIntersection14802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14802<T> = UnionToIntersection14802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14802<T extends unknown[], V> = [...T, V];

type TuplifyUnion14802<T, L = LastOf14802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14802<TuplifyUnion14802<Exclude<T, L>>, L>;

type DeepPartial14802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14802<T[P]> }
  : T;

type Paths14802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14802<K, Paths14802<T[K], Prev14802[D]>> : never }[keyof T]
  : never;

type Prev14802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14802 {
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

type ConfigPaths14802 = Paths14802<NestedConfig14802>;

interface HeavyProps14802 {
  config: DeepPartial14802<NestedConfig14802>;
  path?: ConfigPaths14802;
}

const HeavyComponent14802 = memo(function HeavyComponent14802({ config }: HeavyProps14802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14802.displayName = 'HeavyComponent14802';
export default HeavyComponent14802;
