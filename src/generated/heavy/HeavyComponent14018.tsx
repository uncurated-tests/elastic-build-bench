'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14018<T> = T extends (infer U)[]
  ? DeepReadonlyArray14018<U>
  : T extends object
  ? DeepReadonlyObject14018<T>
  : T;

interface DeepReadonlyArray14018<T> extends ReadonlyArray<DeepReadonly14018<T>> {}

type DeepReadonlyObject14018<T> = {
  readonly [P in keyof T]: DeepReadonly14018<T[P]>;
};

type UnionToIntersection14018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14018<T> = UnionToIntersection14018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14018<T extends unknown[], V> = [...T, V];

type TuplifyUnion14018<T, L = LastOf14018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14018<TuplifyUnion14018<Exclude<T, L>>, L>;

type DeepPartial14018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14018<T[P]> }
  : T;

type Paths14018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14018<K, Paths14018<T[K], Prev14018[D]>> : never }[keyof T]
  : never;

type Prev14018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14018 {
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

type ConfigPaths14018 = Paths14018<NestedConfig14018>;

interface HeavyProps14018 {
  config: DeepPartial14018<NestedConfig14018>;
  path?: ConfigPaths14018;
}

const HeavyComponent14018 = memo(function HeavyComponent14018({ config }: HeavyProps14018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14018.displayName = 'HeavyComponent14018';
export default HeavyComponent14018;
