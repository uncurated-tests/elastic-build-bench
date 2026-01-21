'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14981<T> = T extends (infer U)[]
  ? DeepReadonlyArray14981<U>
  : T extends object
  ? DeepReadonlyObject14981<T>
  : T;

interface DeepReadonlyArray14981<T> extends ReadonlyArray<DeepReadonly14981<T>> {}

type DeepReadonlyObject14981<T> = {
  readonly [P in keyof T]: DeepReadonly14981<T[P]>;
};

type UnionToIntersection14981<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14981<T> = UnionToIntersection14981<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14981<T extends unknown[], V> = [...T, V];

type TuplifyUnion14981<T, L = LastOf14981<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14981<TuplifyUnion14981<Exclude<T, L>>, L>;

type DeepPartial14981<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14981<T[P]> }
  : T;

type Paths14981<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14981<K, Paths14981<T[K], Prev14981[D]>> : never }[keyof T]
  : never;

type Prev14981 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14981<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14981 {
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

type ConfigPaths14981 = Paths14981<NestedConfig14981>;

interface HeavyProps14981 {
  config: DeepPartial14981<NestedConfig14981>;
  path?: ConfigPaths14981;
}

const HeavyComponent14981 = memo(function HeavyComponent14981({ config }: HeavyProps14981) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14981) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14981 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14981: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14981.displayName = 'HeavyComponent14981';
export default HeavyComponent14981;
