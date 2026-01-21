'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14191<T> = T extends (infer U)[]
  ? DeepReadonlyArray14191<U>
  : T extends object
  ? DeepReadonlyObject14191<T>
  : T;

interface DeepReadonlyArray14191<T> extends ReadonlyArray<DeepReadonly14191<T>> {}

type DeepReadonlyObject14191<T> = {
  readonly [P in keyof T]: DeepReadonly14191<T[P]>;
};

type UnionToIntersection14191<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14191<T> = UnionToIntersection14191<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14191<T extends unknown[], V> = [...T, V];

type TuplifyUnion14191<T, L = LastOf14191<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14191<TuplifyUnion14191<Exclude<T, L>>, L>;

type DeepPartial14191<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14191<T[P]> }
  : T;

type Paths14191<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14191<K, Paths14191<T[K], Prev14191[D]>> : never }[keyof T]
  : never;

type Prev14191 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14191<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14191 {
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

type ConfigPaths14191 = Paths14191<NestedConfig14191>;

interface HeavyProps14191 {
  config: DeepPartial14191<NestedConfig14191>;
  path?: ConfigPaths14191;
}

const HeavyComponent14191 = memo(function HeavyComponent14191({ config }: HeavyProps14191) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14191) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14191 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14191: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14191.displayName = 'HeavyComponent14191';
export default HeavyComponent14191;
