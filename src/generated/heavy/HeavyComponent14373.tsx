'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14373<T> = T extends (infer U)[]
  ? DeepReadonlyArray14373<U>
  : T extends object
  ? DeepReadonlyObject14373<T>
  : T;

interface DeepReadonlyArray14373<T> extends ReadonlyArray<DeepReadonly14373<T>> {}

type DeepReadonlyObject14373<T> = {
  readonly [P in keyof T]: DeepReadonly14373<T[P]>;
};

type UnionToIntersection14373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14373<T> = UnionToIntersection14373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14373<T extends unknown[], V> = [...T, V];

type TuplifyUnion14373<T, L = LastOf14373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14373<TuplifyUnion14373<Exclude<T, L>>, L>;

type DeepPartial14373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14373<T[P]> }
  : T;

type Paths14373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14373<K, Paths14373<T[K], Prev14373[D]>> : never }[keyof T]
  : never;

type Prev14373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14373 {
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

type ConfigPaths14373 = Paths14373<NestedConfig14373>;

interface HeavyProps14373 {
  config: DeepPartial14373<NestedConfig14373>;
  path?: ConfigPaths14373;
}

const HeavyComponent14373 = memo(function HeavyComponent14373({ config }: HeavyProps14373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14373.displayName = 'HeavyComponent14373';
export default HeavyComponent14373;
