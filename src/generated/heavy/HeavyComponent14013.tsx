'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14013<T> = T extends (infer U)[]
  ? DeepReadonlyArray14013<U>
  : T extends object
  ? DeepReadonlyObject14013<T>
  : T;

interface DeepReadonlyArray14013<T> extends ReadonlyArray<DeepReadonly14013<T>> {}

type DeepReadonlyObject14013<T> = {
  readonly [P in keyof T]: DeepReadonly14013<T[P]>;
};

type UnionToIntersection14013<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14013<T> = UnionToIntersection14013<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14013<T extends unknown[], V> = [...T, V];

type TuplifyUnion14013<T, L = LastOf14013<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14013<TuplifyUnion14013<Exclude<T, L>>, L>;

type DeepPartial14013<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14013<T[P]> }
  : T;

type Paths14013<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14013<K, Paths14013<T[K], Prev14013[D]>> : never }[keyof T]
  : never;

type Prev14013 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14013<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14013 {
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

type ConfigPaths14013 = Paths14013<NestedConfig14013>;

interface HeavyProps14013 {
  config: DeepPartial14013<NestedConfig14013>;
  path?: ConfigPaths14013;
}

const HeavyComponent14013 = memo(function HeavyComponent14013({ config }: HeavyProps14013) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14013) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14013 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14013: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14013.displayName = 'HeavyComponent14013';
export default HeavyComponent14013;
