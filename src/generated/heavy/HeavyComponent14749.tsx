'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14749<T> = T extends (infer U)[]
  ? DeepReadonlyArray14749<U>
  : T extends object
  ? DeepReadonlyObject14749<T>
  : T;

interface DeepReadonlyArray14749<T> extends ReadonlyArray<DeepReadonly14749<T>> {}

type DeepReadonlyObject14749<T> = {
  readonly [P in keyof T]: DeepReadonly14749<T[P]>;
};

type UnionToIntersection14749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14749<T> = UnionToIntersection14749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14749<T extends unknown[], V> = [...T, V];

type TuplifyUnion14749<T, L = LastOf14749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14749<TuplifyUnion14749<Exclude<T, L>>, L>;

type DeepPartial14749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14749<T[P]> }
  : T;

type Paths14749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14749<K, Paths14749<T[K], Prev14749[D]>> : never }[keyof T]
  : never;

type Prev14749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14749 {
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

type ConfigPaths14749 = Paths14749<NestedConfig14749>;

interface HeavyProps14749 {
  config: DeepPartial14749<NestedConfig14749>;
  path?: ConfigPaths14749;
}

const HeavyComponent14749 = memo(function HeavyComponent14749({ config }: HeavyProps14749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14749.displayName = 'HeavyComponent14749';
export default HeavyComponent14749;
