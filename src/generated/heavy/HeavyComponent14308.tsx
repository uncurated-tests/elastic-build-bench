'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14308<T> = T extends (infer U)[]
  ? DeepReadonlyArray14308<U>
  : T extends object
  ? DeepReadonlyObject14308<T>
  : T;

interface DeepReadonlyArray14308<T> extends ReadonlyArray<DeepReadonly14308<T>> {}

type DeepReadonlyObject14308<T> = {
  readonly [P in keyof T]: DeepReadonly14308<T[P]>;
};

type UnionToIntersection14308<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14308<T> = UnionToIntersection14308<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14308<T extends unknown[], V> = [...T, V];

type TuplifyUnion14308<T, L = LastOf14308<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14308<TuplifyUnion14308<Exclude<T, L>>, L>;

type DeepPartial14308<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14308<T[P]> }
  : T;

type Paths14308<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14308<K, Paths14308<T[K], Prev14308[D]>> : never }[keyof T]
  : never;

type Prev14308 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14308<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14308 {
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

type ConfigPaths14308 = Paths14308<NestedConfig14308>;

interface HeavyProps14308 {
  config: DeepPartial14308<NestedConfig14308>;
  path?: ConfigPaths14308;
}

const HeavyComponent14308 = memo(function HeavyComponent14308({ config }: HeavyProps14308) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14308) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14308 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14308: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14308.displayName = 'HeavyComponent14308';
export default HeavyComponent14308;
