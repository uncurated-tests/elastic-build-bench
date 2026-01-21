'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14226<T> = T extends (infer U)[]
  ? DeepReadonlyArray14226<U>
  : T extends object
  ? DeepReadonlyObject14226<T>
  : T;

interface DeepReadonlyArray14226<T> extends ReadonlyArray<DeepReadonly14226<T>> {}

type DeepReadonlyObject14226<T> = {
  readonly [P in keyof T]: DeepReadonly14226<T[P]>;
};

type UnionToIntersection14226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14226<T> = UnionToIntersection14226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14226<T extends unknown[], V> = [...T, V];

type TuplifyUnion14226<T, L = LastOf14226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14226<TuplifyUnion14226<Exclude<T, L>>, L>;

type DeepPartial14226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14226<T[P]> }
  : T;

type Paths14226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14226<K, Paths14226<T[K], Prev14226[D]>> : never }[keyof T]
  : never;

type Prev14226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14226 {
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

type ConfigPaths14226 = Paths14226<NestedConfig14226>;

interface HeavyProps14226 {
  config: DeepPartial14226<NestedConfig14226>;
  path?: ConfigPaths14226;
}

const HeavyComponent14226 = memo(function HeavyComponent14226({ config }: HeavyProps14226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14226.displayName = 'HeavyComponent14226';
export default HeavyComponent14226;
