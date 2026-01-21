'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14741<T> = T extends (infer U)[]
  ? DeepReadonlyArray14741<U>
  : T extends object
  ? DeepReadonlyObject14741<T>
  : T;

interface DeepReadonlyArray14741<T> extends ReadonlyArray<DeepReadonly14741<T>> {}

type DeepReadonlyObject14741<T> = {
  readonly [P in keyof T]: DeepReadonly14741<T[P]>;
};

type UnionToIntersection14741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14741<T> = UnionToIntersection14741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14741<T extends unknown[], V> = [...T, V];

type TuplifyUnion14741<T, L = LastOf14741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14741<TuplifyUnion14741<Exclude<T, L>>, L>;

type DeepPartial14741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14741<T[P]> }
  : T;

type Paths14741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14741<K, Paths14741<T[K], Prev14741[D]>> : never }[keyof T]
  : never;

type Prev14741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14741 {
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

type ConfigPaths14741 = Paths14741<NestedConfig14741>;

interface HeavyProps14741 {
  config: DeepPartial14741<NestedConfig14741>;
  path?: ConfigPaths14741;
}

const HeavyComponent14741 = memo(function HeavyComponent14741({ config }: HeavyProps14741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14741.displayName = 'HeavyComponent14741';
export default HeavyComponent14741;
