'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14389<T> = T extends (infer U)[]
  ? DeepReadonlyArray14389<U>
  : T extends object
  ? DeepReadonlyObject14389<T>
  : T;

interface DeepReadonlyArray14389<T> extends ReadonlyArray<DeepReadonly14389<T>> {}

type DeepReadonlyObject14389<T> = {
  readonly [P in keyof T]: DeepReadonly14389<T[P]>;
};

type UnionToIntersection14389<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14389<T> = UnionToIntersection14389<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14389<T extends unknown[], V> = [...T, V];

type TuplifyUnion14389<T, L = LastOf14389<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14389<TuplifyUnion14389<Exclude<T, L>>, L>;

type DeepPartial14389<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14389<T[P]> }
  : T;

type Paths14389<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14389<K, Paths14389<T[K], Prev14389[D]>> : never }[keyof T]
  : never;

type Prev14389 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14389<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14389 {
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

type ConfigPaths14389 = Paths14389<NestedConfig14389>;

interface HeavyProps14389 {
  config: DeepPartial14389<NestedConfig14389>;
  path?: ConfigPaths14389;
}

const HeavyComponent14389 = memo(function HeavyComponent14389({ config }: HeavyProps14389) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14389) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14389 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14389: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14389.displayName = 'HeavyComponent14389';
export default HeavyComponent14389;
