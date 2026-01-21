'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14698<T> = T extends (infer U)[]
  ? DeepReadonlyArray14698<U>
  : T extends object
  ? DeepReadonlyObject14698<T>
  : T;

interface DeepReadonlyArray14698<T> extends ReadonlyArray<DeepReadonly14698<T>> {}

type DeepReadonlyObject14698<T> = {
  readonly [P in keyof T]: DeepReadonly14698<T[P]>;
};

type UnionToIntersection14698<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14698<T> = UnionToIntersection14698<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14698<T extends unknown[], V> = [...T, V];

type TuplifyUnion14698<T, L = LastOf14698<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14698<TuplifyUnion14698<Exclude<T, L>>, L>;

type DeepPartial14698<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14698<T[P]> }
  : T;

type Paths14698<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14698<K, Paths14698<T[K], Prev14698[D]>> : never }[keyof T]
  : never;

type Prev14698 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14698<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14698 {
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

type ConfigPaths14698 = Paths14698<NestedConfig14698>;

interface HeavyProps14698 {
  config: DeepPartial14698<NestedConfig14698>;
  path?: ConfigPaths14698;
}

const HeavyComponent14698 = memo(function HeavyComponent14698({ config }: HeavyProps14698) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14698) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14698 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14698: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14698.displayName = 'HeavyComponent14698';
export default HeavyComponent14698;
