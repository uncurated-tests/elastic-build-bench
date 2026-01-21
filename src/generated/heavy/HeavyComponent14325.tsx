'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14325<T> = T extends (infer U)[]
  ? DeepReadonlyArray14325<U>
  : T extends object
  ? DeepReadonlyObject14325<T>
  : T;

interface DeepReadonlyArray14325<T> extends ReadonlyArray<DeepReadonly14325<T>> {}

type DeepReadonlyObject14325<T> = {
  readonly [P in keyof T]: DeepReadonly14325<T[P]>;
};

type UnionToIntersection14325<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14325<T> = UnionToIntersection14325<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14325<T extends unknown[], V> = [...T, V];

type TuplifyUnion14325<T, L = LastOf14325<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14325<TuplifyUnion14325<Exclude<T, L>>, L>;

type DeepPartial14325<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14325<T[P]> }
  : T;

type Paths14325<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14325<K, Paths14325<T[K], Prev14325[D]>> : never }[keyof T]
  : never;

type Prev14325 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14325<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14325 {
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

type ConfigPaths14325 = Paths14325<NestedConfig14325>;

interface HeavyProps14325 {
  config: DeepPartial14325<NestedConfig14325>;
  path?: ConfigPaths14325;
}

const HeavyComponent14325 = memo(function HeavyComponent14325({ config }: HeavyProps14325) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14325) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14325 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14325: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14325.displayName = 'HeavyComponent14325';
export default HeavyComponent14325;
