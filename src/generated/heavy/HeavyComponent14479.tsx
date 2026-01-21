'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14479<T> = T extends (infer U)[]
  ? DeepReadonlyArray14479<U>
  : T extends object
  ? DeepReadonlyObject14479<T>
  : T;

interface DeepReadonlyArray14479<T> extends ReadonlyArray<DeepReadonly14479<T>> {}

type DeepReadonlyObject14479<T> = {
  readonly [P in keyof T]: DeepReadonly14479<T[P]>;
};

type UnionToIntersection14479<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14479<T> = UnionToIntersection14479<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14479<T extends unknown[], V> = [...T, V];

type TuplifyUnion14479<T, L = LastOf14479<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14479<TuplifyUnion14479<Exclude<T, L>>, L>;

type DeepPartial14479<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14479<T[P]> }
  : T;

type Paths14479<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14479<K, Paths14479<T[K], Prev14479[D]>> : never }[keyof T]
  : never;

type Prev14479 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14479<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14479 {
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

type ConfigPaths14479 = Paths14479<NestedConfig14479>;

interface HeavyProps14479 {
  config: DeepPartial14479<NestedConfig14479>;
  path?: ConfigPaths14479;
}

const HeavyComponent14479 = memo(function HeavyComponent14479({ config }: HeavyProps14479) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14479) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14479 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14479: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14479.displayName = 'HeavyComponent14479';
export default HeavyComponent14479;
