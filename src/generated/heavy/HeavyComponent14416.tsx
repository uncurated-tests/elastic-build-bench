'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14416<T> = T extends (infer U)[]
  ? DeepReadonlyArray14416<U>
  : T extends object
  ? DeepReadonlyObject14416<T>
  : T;

interface DeepReadonlyArray14416<T> extends ReadonlyArray<DeepReadonly14416<T>> {}

type DeepReadonlyObject14416<T> = {
  readonly [P in keyof T]: DeepReadonly14416<T[P]>;
};

type UnionToIntersection14416<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14416<T> = UnionToIntersection14416<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14416<T extends unknown[], V> = [...T, V];

type TuplifyUnion14416<T, L = LastOf14416<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14416<TuplifyUnion14416<Exclude<T, L>>, L>;

type DeepPartial14416<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14416<T[P]> }
  : T;

type Paths14416<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14416<K, Paths14416<T[K], Prev14416[D]>> : never }[keyof T]
  : never;

type Prev14416 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14416<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14416 {
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

type ConfigPaths14416 = Paths14416<NestedConfig14416>;

interface HeavyProps14416 {
  config: DeepPartial14416<NestedConfig14416>;
  path?: ConfigPaths14416;
}

const HeavyComponent14416 = memo(function HeavyComponent14416({ config }: HeavyProps14416) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14416) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14416 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14416: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14416.displayName = 'HeavyComponent14416';
export default HeavyComponent14416;
