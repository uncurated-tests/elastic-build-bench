'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14237<T> = T extends (infer U)[]
  ? DeepReadonlyArray14237<U>
  : T extends object
  ? DeepReadonlyObject14237<T>
  : T;

interface DeepReadonlyArray14237<T> extends ReadonlyArray<DeepReadonly14237<T>> {}

type DeepReadonlyObject14237<T> = {
  readonly [P in keyof T]: DeepReadonly14237<T[P]>;
};

type UnionToIntersection14237<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14237<T> = UnionToIntersection14237<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14237<T extends unknown[], V> = [...T, V];

type TuplifyUnion14237<T, L = LastOf14237<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14237<TuplifyUnion14237<Exclude<T, L>>, L>;

type DeepPartial14237<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14237<T[P]> }
  : T;

type Paths14237<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14237<K, Paths14237<T[K], Prev14237[D]>> : never }[keyof T]
  : never;

type Prev14237 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14237<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14237 {
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

type ConfigPaths14237 = Paths14237<NestedConfig14237>;

interface HeavyProps14237 {
  config: DeepPartial14237<NestedConfig14237>;
  path?: ConfigPaths14237;
}

const HeavyComponent14237 = memo(function HeavyComponent14237({ config }: HeavyProps14237) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14237) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14237 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14237: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14237.displayName = 'HeavyComponent14237';
export default HeavyComponent14237;
