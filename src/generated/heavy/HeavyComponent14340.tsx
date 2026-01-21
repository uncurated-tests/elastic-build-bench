'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14340<T> = T extends (infer U)[]
  ? DeepReadonlyArray14340<U>
  : T extends object
  ? DeepReadonlyObject14340<T>
  : T;

interface DeepReadonlyArray14340<T> extends ReadonlyArray<DeepReadonly14340<T>> {}

type DeepReadonlyObject14340<T> = {
  readonly [P in keyof T]: DeepReadonly14340<T[P]>;
};

type UnionToIntersection14340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14340<T> = UnionToIntersection14340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14340<T extends unknown[], V> = [...T, V];

type TuplifyUnion14340<T, L = LastOf14340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14340<TuplifyUnion14340<Exclude<T, L>>, L>;

type DeepPartial14340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14340<T[P]> }
  : T;

type Paths14340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14340<K, Paths14340<T[K], Prev14340[D]>> : never }[keyof T]
  : never;

type Prev14340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14340 {
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

type ConfigPaths14340 = Paths14340<NestedConfig14340>;

interface HeavyProps14340 {
  config: DeepPartial14340<NestedConfig14340>;
  path?: ConfigPaths14340;
}

const HeavyComponent14340 = memo(function HeavyComponent14340({ config }: HeavyProps14340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14340.displayName = 'HeavyComponent14340';
export default HeavyComponent14340;
