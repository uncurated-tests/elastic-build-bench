'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14091<T> = T extends (infer U)[]
  ? DeepReadonlyArray14091<U>
  : T extends object
  ? DeepReadonlyObject14091<T>
  : T;

interface DeepReadonlyArray14091<T> extends ReadonlyArray<DeepReadonly14091<T>> {}

type DeepReadonlyObject14091<T> = {
  readonly [P in keyof T]: DeepReadonly14091<T[P]>;
};

type UnionToIntersection14091<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14091<T> = UnionToIntersection14091<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14091<T extends unknown[], V> = [...T, V];

type TuplifyUnion14091<T, L = LastOf14091<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14091<TuplifyUnion14091<Exclude<T, L>>, L>;

type DeepPartial14091<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14091<T[P]> }
  : T;

type Paths14091<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14091<K, Paths14091<T[K], Prev14091[D]>> : never }[keyof T]
  : never;

type Prev14091 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14091<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14091 {
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

type ConfigPaths14091 = Paths14091<NestedConfig14091>;

interface HeavyProps14091 {
  config: DeepPartial14091<NestedConfig14091>;
  path?: ConfigPaths14091;
}

const HeavyComponent14091 = memo(function HeavyComponent14091({ config }: HeavyProps14091) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14091) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14091 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14091: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14091.displayName = 'HeavyComponent14091';
export default HeavyComponent14091;
