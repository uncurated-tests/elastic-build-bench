'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14295<T> = T extends (infer U)[]
  ? DeepReadonlyArray14295<U>
  : T extends object
  ? DeepReadonlyObject14295<T>
  : T;

interface DeepReadonlyArray14295<T> extends ReadonlyArray<DeepReadonly14295<T>> {}

type DeepReadonlyObject14295<T> = {
  readonly [P in keyof T]: DeepReadonly14295<T[P]>;
};

type UnionToIntersection14295<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14295<T> = UnionToIntersection14295<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14295<T extends unknown[], V> = [...T, V];

type TuplifyUnion14295<T, L = LastOf14295<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14295<TuplifyUnion14295<Exclude<T, L>>, L>;

type DeepPartial14295<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14295<T[P]> }
  : T;

type Paths14295<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14295<K, Paths14295<T[K], Prev14295[D]>> : never }[keyof T]
  : never;

type Prev14295 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14295<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14295 {
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

type ConfigPaths14295 = Paths14295<NestedConfig14295>;

interface HeavyProps14295 {
  config: DeepPartial14295<NestedConfig14295>;
  path?: ConfigPaths14295;
}

const HeavyComponent14295 = memo(function HeavyComponent14295({ config }: HeavyProps14295) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14295) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14295 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14295: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14295.displayName = 'HeavyComponent14295';
export default HeavyComponent14295;
